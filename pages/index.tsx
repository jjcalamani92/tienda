import type { NextPage } from "next";
import {
	Layout,
	LayoutHome,
	SwiperHome,
} from "../components";
import Counters from "../components/class/Counters";
import { HomeWear } from "../components/home";
const image=['1', '2']
const Index: NextPage = () => {
	return (
		<Layout
			title={"Piccoletti - Store"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<HomeWear />
			{/* <SwiperHome image={image} /> */}
			{/* Class */}
			{/* <Counters /> */}
		</Layout>
	);
};

export default Index;
