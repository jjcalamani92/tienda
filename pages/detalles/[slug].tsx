import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
	Layout,
	Spinner01,
	ProductOverviews05
} from "../../components";
import { useQuery } from "@apollo/client";
import { IProduct } from "../../src/interfaces";
import { PRODUCTS, PRODUCT_BY_SLUG } from "../../src/gql/query";
import { client } from "../../src/apollo";
import { getAllProductSlugs, getProductBySlug } from '../../src/db/dbProduct';

interface Props {
	product: IProduct;
}

const SlugPage: NextPage<Props> = ({ product }) => {

	// const { loading, error, data } = useQuery(PRODUCT_BY_SLUG, {
	// 	variables: { slug: `${slug}` }
	// });
	// if (loading) return <Spinner01 />;
	// console.log(slug)
	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<ProductOverviews05 product={product} />

		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug = "" } = params as { slug: string };
	const product = await getProductBySlug( slug );
  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
	return {
		props: {
			product
    },
    revalidate: 10
  }
};
export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const slugs = await getAllProductSlugs();
	return {
		paths: slugs.map(({ slug }) => ({
			params: {
				slug
			}
		})),
		fallback: false
	};
};
export default SlugPage;
