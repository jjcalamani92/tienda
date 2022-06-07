import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
	Heading04,
	Layout,
	LayoutProductlist,
	Spinner01
} from "../../components";
import { Site } from "../../src/interfaces";
import { SITEBYCATEGORY } from "../../src/gql/query";
import { clientSite } from "../../src/apollo";
import { Category, Section } from "../../src/interfaces/Site";
import { request } from "graphql-request";
import useSWR from "swr";
// require('dotenv').config()
const API_ENDPOINT = `${process.env.APIS_URL}/graphql`

interface Props {
	line: string;
}

const LinePage: NextPage<Props> = ({ line }) => {
	const { isValidating, error, data } = useSWR(SITEBYCATEGORY, (query) =>
		request(API_ENDPOINT, query)
	);

	if (isValidating) return <Spinner01 />;
	const site = data.sites.find(findId);
	function findId(site: Site) {
		return site._id === process.env.API_USER;
	}

	const category = site.categories.find(findCategory);
	function findCategory(category: Category) {
		return category.href === `${line}`;
	}

	const section = category.sections.find(findSection);
	function findSection(section: Section) {
		return section.href === "linea-automotiva";
	}

	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<Heading04 category={line} />
			<LayoutProductlist products={section.items} />
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data } = await clientSite.query({
		query: SITEBYCATEGORY
	});
	const site = data.sites.find(findId);
	function findId(site: Site) {
		return site._id === process.env.API_USER;
	}
	const paths = site.categories.map((data: Category) => ({
		params: { line: data.href }
	}));
	// console.log(paths)
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { line = "" } = params as { line: string };
	return {
		props: {
			line
		},
		revalidate: 60 * 60 * 24
	};
};

export default LinePage;
