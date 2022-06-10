import Head from "next/head";
import { FC } from "react";
import { Footer01 } from ".";
import { Header01 } from "./header";
import { HeaderPiccoletti } from "./header/HeaderPiccoletti";
import { HeaderWear } from './header/HeaderWear';

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
			{/* <Header01 /> */}
			{/* <HeaderPiccoletti /> */}
			<HeaderWear />
			<main>{children}</main>
			<Footer01 />
		</>
	);
};
