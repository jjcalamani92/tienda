import Head from "next/head";
import { FC } from "react";
import { Header, Footer01 } from ".";
import { Header01 } from "./Header/Header";
import HeaderC from "./Header/HeaderC";
import { Footer } from './Footer';

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
	children: any;
}

export const Layout: FC<Props> = ({
	title,
	children,
	pageDescription,
	imageFullUrl
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="keywords" />
				<meta name="description" content={pageDescription} />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:type" content="og:product" />
				{imageFullUrl && <meta property="og:image" content={imageFullUrl} />}
			</Head>
			{/* <HeaderC /> */}
			<Header01 />
			{/* <Header /> */}
			<main>{children}</main>
			{/* <Footer /> */}
			<Footer01 />
		</>
	);
};
