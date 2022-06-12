import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
	CategoryPreviews02,
	Layout,
	Spinner01
} from "../../components";
import { IClothing, IProduct, Site } from "../../src/interfaces";
import { CATEGORY, PRODUCTS, PRODUCTS_BY_GENDER, SITEBYITEM, SITEBYSECTION, SITES } from "../../src/gql/clothing/query";
import { client } from "../../src/apollo";
import { Category, Section, Item, Featured } from '../../src/interfaces/Site';
import { request, RequestDocument } from "graphql-request";
import useSWR from "swr";
import Heading01 from "../../components/Heading/Heading";
import { useRouter } from "next/router";
import { CategoryPreviews01 } from '../../components/ecommerce/categoryPreviews/CategoryPreviews01';

const fetcher = (query: RequestDocument, variables: string) => request(`${process.env.APIS_URL}/graphql`, query, variables);


const CategoryPage= () => {
	const router = useRouter();
	const { category } = router.query
	const { isValidating, data, error } = useSWR( [SITEBYSECTION, { id: process.env.API_SITE }], fetcher );
	if (isValidating) return <Spinner01 />;
  const res = data.site.categories.find(findCategory)
	function findCategory(res:Category){
		return res.name === `${category}`;
	}

	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
      <Heading01 category={`${category}`} />
			<CategoryPreviews01 section={res.sections} category={`${category}`}/>
			<CategoryPreviews02 featured={res.featured}/>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await client.query({
		query: CATEGORY,
    variables: { site: `${process.env.API_SITE}`},
	});
	const paths = data.clothingAll.map((data:IClothing) => ({
    params: { category: data.category}
  }))
	return {
		paths,
		fallback: false
	};
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { category = "" } = params as { category: string };
	return {
		props: {
			category
		},
		revalidate: 60 * 60 * 24
	};
};



export default CategoryPage;