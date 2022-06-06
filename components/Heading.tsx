import Link from "next/link";
import React, { FC } from "react";
import { IProduct } from "../src/interfaces";
import { slug } from "../src/utils/function";

export const Heading = () => {
	return (
		<div className="max-w-2xl mx-auto py-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div className="flex justify-between items-center w-full">
				<div className="flex flex-col justify-start items-start">
					<p className="text-sm leading-none text-gray-600">Men - Chamarras</p>
					<div className="mt-2 flex flex-row justify-end items-center space-x-3">
						<p className="text-2xl font-semibold leading-normal text-gray-800">
							Chamarras
						</p>
						<p className="text-base leading-4 text-gray-600 mt-2">
							(09 productos)
						</p>
					</div>
				</div>

				<button className="hover:text-gray-500 text-gray-600 bg-gray-100 py-3.5 px-3 rounded-sm flex flex-row justify-center items-center space-x-3">
					<svg
						className="fill-stroke"
						width="24"
						height="16"
						viewBox="0 0 24 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 14.6452V9.33875"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M4 6.30645V1"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 14.6452V7.82263"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 4.79032V1"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M20 14.6452V10.8549"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M20 7.82258V1"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M1 9.33875H7"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9 4.79028H15"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M17 10.8549H23"
							stroke="currentColor"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<p className="hidden md:block text-sm leading-none">Filtros</p>
				</button>
			</div>
		</div>
	);
};

interface Props {
	category: string | string[] | undefined;
}
interface Props01 {
	category: string | string[] | undefined;
	subCategory: string | string[] | undefined;
}

export const HeadingPrimary: FC<Props01> = ({ category, subCategory }) => {
	return (
		<div className="max-w-2xl mx-auto py-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div className="flex justify-between items-center w-full">
				<div className="flex flex-col justify-start items-start">
					<p className="text-sm leading-none text-gray-600 capitalize">
						{category} - {subCategory}
					</p>
					<div className="mt-2 flex flex-row justify-end items-center space-x-3">
						<p className="text-2xl font-semibold leading-normal text-gray-800 capitalize">
							{subCategory}
						</p>
						<p className="text-base leading-4 text-gray-600 mt-2">
							(09 productos)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export const HeadingSecondary: FC<Props> = ({ category }) => {
	return (
		<div className="max-w-2xl mx-auto py-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div className="flex justify-between items-center w-full">
				<div className="flex flex-col justify-start items-start">
					<div className="mt-2 flex flex-row justify-end items-center space-x-3">
						<p className="text-2xl font-semibold leading-normal text-gray-800 capitalize">
							{category}
						</p>
						<p className="text-base leading-4 text-gray-600 mt-2">
							(09 productos)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

interface Props02 {
	product: IProduct;
}

export const Heading01: FC<Props02> = ({ product }) => {
	const { category, subCategory } = product;
	const hrefCategory = slug(category);
	const hrefSubCategory = slug(subCategory);
	return (
			<nav aria-label="Breadcrumb" className=" py-2 md:py-6">
				<ol
					role="list"
					className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
				>
					<li>
						<div className="flex items-center">
							<Link href={`/${hrefCategory}`} passHref prefetch={false}>
								<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
									{product.category}
								</a>
							</Link>

							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-4 h-5 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
					<li>
						<div className="flex items-center">
							<Link
								href={`/${hrefCategory}/${hrefSubCategory}`}
								passHref
								prefetch={false}
							>
								<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
									{product.subCategory}
								</a>
							</Link>
							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-4 h-5 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
					<li className="text-sm">
						<Link href={`/detalles/${product.slug}`} passHref prefetch={false}>
							<a
								aria-current="page"
								className="font-medium text-gray-500 hover:text-gray-600"
							>
								{product.title}
							</a>
						</Link>
					</li>
				</ol>
			</nav>
	);
};

interface Props03 {
	category: string | any;
	subCategory: string | any;
}

export const Heading02: FC<Props03> = ({ category, subCategory }) => {
	return (
			<nav aria-label="Breadcrumb" className=" py-2 md:py-6">
				<ol
					role="list"
					className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
				>
					<li>
						<div className="flex items-center">
							<Link href={`/${slug(category)}`} passHref prefetch={false}>
								<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
									{category}
								</a>
							</Link>

							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-4 h-5 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
					<li>
						<div className="flex items-center">
							<Link
								href={`/${slug(category)}/${slug(subCategory)}`}
								passHref
								prefetch={false}
							>
								<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
									{subCategory}
								</a>
							</Link>
							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-4 h-5 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
					
				</ol>
			</nav>
	);
};
interface Props04 {
	category: string | any;
}

export const Heading04: FC<Props04> = ({ category }) => {
	return (
			<nav aria-label="Breadcrumb" className=" py-2 md:py-6">
				<ol
					role="list"
					className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
				>
					<li>
						<div className="flex items-center">
							<Link href={`/${slug(category)}`} passHref prefetch={false}>
								<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
									{category}
								</a>
							</Link>

							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-4 h-5 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
				</ol>
			</nav>
	);
};
