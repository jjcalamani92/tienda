import React from 'react'

export const SlugClothing = () => {
  return (
    <div>SlugClothing</div>
  )
}

// import { GetStaticPaths, GetStaticProps, NextPage } from "next";
// import {
// 	Layout,
// 	Spinner01,
// 	ProductOverviews05
// } from "../../components";
// import { useQuery } from "@apollo/client";
// import { IClothing, IProduct, IWear } from "../../src/interfaces";
// import { CLOTHINGS, PRODUCTS, PRODUCT_BY_SLUG } from "../../src/gql/clothing/query";
// import { client } from "../../src/apollo";
// import Heading01 from "../../components/Heading/Heading";

// interface SlugPage {
// 	slug: string;
// }

// const SlugPage: NextPage<SlugPage> = ({ slug }) => {

// 	const { loading, error, data } = useQuery(PRODUCT_BY_SLUG, {
// 		variables: { slug: `${slug}`, site: process.env.API_SITE }
// 	});
// 	if (loading) return <Spinner01 />;
// 	console.log(data.clothingBySlug)
// 	return (
// 		<Layout
// 			title={"Choco - Stores"}
// 			pageDescription={"Encuentra tu ropa favorita"}
// 		>
//       <Heading01 category={`${data.clothingBySlug.gender}`} section={`${data.clothingBySlug.category}`} item={`${data.clothingBySlug.name}`}/>
			
// 			<ProductOverviews05 product={data.clothingBySlug} />

// 		</Layout>
// 	);
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	const { slug = "" } = params as { slug: string };
// 	return {
// 		props: {
// 			slug
//     },
//     revalidate: 60 * 60 * 24
//   }
// };
// export const getStaticPaths: GetStaticPaths = async (ctx) => {
// 	const { data } = await client.query({
// 		query: CLOTHINGS
// 	});
// 	const paths = data.clothings.map((data: IClothing) => ({
// 		params: { slug: data.slug }
// 	}));
// 	console.log(paths)
// 	return {
// 		paths,
// 		fallback: "blocking"
// 	};
// };
// export default SlugPage;
