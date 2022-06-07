import { NextPage } from "next";
import { Layout } from "../../components";
import { Table02 } from "../../components/Table";
import { client } from "../../src/apollo";
import { PRODUCT_UPDATE } from "../../src/gql/query";
import { IProduct } from "../../src/interfaces";
interface Props {
	paints: IProduct[];
}

const AdminPage: NextPage<Props> = ({ paints }) => {

	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			{/* <Table01 products={wears} /> */}
			<Table02 products={paints} />
		</Layout>
	);

};

export async function getStaticProps() {
	const { data } = await client.query({
		query: PRODUCT_UPDATE
	});
	return {
		props: {
			paints: data.paints
		}
	};
}

export default AdminPage;
