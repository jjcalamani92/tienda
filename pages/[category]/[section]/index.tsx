import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout, LayoutCategoryList, LayoutProductlist, Spinner01 } from "../../../components";

import { Category, IClothing, IProduct, IWear, Section, Site } from "../../../src/interfaces";
import { useQuery } from "@apollo/client";
import {
  PRODUCTS,
  PRODUCTS_BY_GENDER_AND_BY_CATEGORY,
  SITEBYITEM,
} from "../../../src/gql/clothing/query";
import { client } from "../../../src/apollo";
import { LayoutProductlist01 } from "../../../components/LayoutProductList01";
import Heading01 from "../../../components/Heading/Heading";
import React, { Component } from "react";
import { useRouter } from "next/router";
import { SECTION } from "../../../src/gql/clothing/query";
import useSWR from "swr";
import request, { RequestDocument } from "graphql-request";

const fetcher = (query: RequestDocument, variables: string) => request(`${process.env.APIS_URL}/graphql`, query, variables);


const SectionPage = () => {
  const router = useRouter();
  const { category, section } = router.query
  const { isValidating, data, error } = useSWR( [SITEBYITEM, { id: process.env.API_SITE }], fetcher );
	if (isValidating) return <Spinner01 />;
  const res = data.site.categories.find(findCategory)
	function findCategory(res:Category){
		return res.name === `${category}`;
	}
  const re = res.sections.find(findSection)
	function findSection(re:Section){
		return re.name === `${section}`;
	}
  console.log(re.items)
  return (
    <>
      <Layout
        title={"Choco - Stores"}
        pageDescription={"Encuentra tu ropa favorita"}
      >
        <Heading01 category={`${category}`} section={`${section}`} />
        {/* <LayoutProductlist01 products={re.items} /> */}
			<LayoutCategoryList products={re.items} />

      </Layout>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await client.query({
		query: SECTION,
    variables: { site: `${process.env.API_SITE}`},
	});
  const paths = data.clothingAll.map((data:IClothing) => ({
    params: { category: data.category, section: data.section }
  })
  )
  return {
    paths,
    fallback: false
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { section = "" } = params as { section: string };
  return {
    props: {
      section
    },
    revalidate: 60 * 60 * 24
  };
};

export default SectionPage;

