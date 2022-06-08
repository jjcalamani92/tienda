import { NextPage } from "next";
import { Layout } from "../../components";
import { Table02 } from "../../components/Table";
import { client } from "../../src/apollo";
import { PRODUCTS, PRODUCT_UPDATE } from "../../src/gql/query";
import { IProduct } from "../../src/interfaces";
import { useQuery } from '@apollo/client';
import { Spinner01 } from '../../components/Spinner';
interface Props {
	paints: IProduct[];
}

const AdminPage: NextPage<Props> = () => {
	const { loading, error, data } = useQuery(PRODUCT_UPDATE);
	if (loading) return <Spinner01 />;
	console.log(data.paints)
	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<Table02 products={data.paints} />
		</Layout>
	);
};
export default AdminPage;
