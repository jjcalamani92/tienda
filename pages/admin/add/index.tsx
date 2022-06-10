import { NextPage } from "next";
import { FormWearAdd, Layout } from "../../../components";
import { FormAdd } from "../../../components/form/FormAdd";

interface Props {
	slug: string;
}

const AddProduct: NextPage<Props> = ({ slug }) => {
	return (
		<Layout
			title="Nuevo Producto"
			pageDescription="{`${product.description}`}"
			imageFullUrl="{`${product.image[1]}`}"
		>
			<FormWearAdd />

		</Layout>
	);
};

export default AddProduct;
