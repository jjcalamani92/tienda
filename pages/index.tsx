import type { NextPage } from "next";
import {
	Layout,
	LayoutHome,
} from "../components";
import Counters from "../components/class/Counters";

const Index: NextPage = () => {
	return (
		<Layout
			title={"Piccoletti - Store"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<LayoutHome />
			{/* Class */}
			{/* <Counters /> */}
		</Layout>
	);
};

export default Index;
