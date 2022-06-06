import { FC, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { IProduct } from "../src/interfaces";
import { slug } from "../src/utils/function";
import Link from "next/link";
import { SwiperComponent, SwiperDetail } from "./Swiper";
import Image from "next/image";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

interface Props {
	product: IProduct;
}

export const ProductOverviews05: FC<Props> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
	const { category, gender } = product;
	return (
		<>
			<section className="container mx-auto" >
				<div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 grid grid-cols-1 gap-4 lg:grid-cols-5">
					<div className="col-span-3" >
						{/* <SwiperComponent image={product.image} /> */}
						<SwiperDetail image={product.image} />
					</div>
					<div className="col-span-2" >
						<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
							<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
								{product.name}
							</h1>
						</div>
						<div className="mt-4 lg:mt-0 lg:row-span-3">
							<h2 className="sr-only">Product information</h2>
							<p className="text-3xl text-gray-900">{product.price}.00 Bs </p>
							{/* Reviews */}
							{/* <div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<div className="flex items-center">
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating
													? "text-gray-900"
													: "text-gray-200",
												"h-5 w-5 flex-shrink-0"
											)}
											aria-hidden="true"
										/>
									))}
								</div>
								<p className="sr-only">{reviews.average} out of 5 stars</p>
								<a
									href={reviews.href}
									className="ml-3 text-sm font-medium text-red-600 hover:text-red-500"
								>
									{reviews.totalCount} reviews
								</a>
							</div>
						</div> */}
							<form className="mt-10">
								{/* Colors */}
								{/* <div>
								<h3 className="text-sm text-gray-900 font-medium">Color</h3>

								<RadioGroup
									value={selectedColor}
									onChange={setSelectedColor}
									className="mt-4"
								>
									<RadioGroup.Label className="sr-only">
										Choose a color
									</RadioGroup.Label>
									<div className="flex items-center space-x-3">
										{product.colors.map((color) => (
											<RadioGroup.Option
												key={color.name}
												value={color}
												className={({ active, checked }) =>
													classNames(
														color.selectedClass,
														active && checked ? "ring ring-offset-1" : "",
														!active && checked ? "ring-2" : "",
														"-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
													)
												}
											>
												<RadioGroup.Label as="span" className="sr-only">
													{color.name}
												</RadioGroup.Label>
												<span
													aria-hidden="true"
													className={classNames(
														color.class,
														"h-8 w-8 border border-black border-opacity-10 rounded-full"
													)}
												/>
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div> */}

								{/* Sizes */}
								<div className="mt-10">
									<div className="flex items-center justify-between">
										<h3 className="text-sm text-gray-900 font-medium">Tallas</h3>
										{/* <a
										href="#"
										className="text-sm font-medium text-red-600 hover:text-red-500"
									>
										Size guide
									</a> */}
									</div>

									<RadioGroup
										value={selectedSize}
										onChange={setSelectedSize}
										className="mt-4"
									>
										<RadioGroup.Label className="sr-only">
											Choose a size
										</RadioGroup.Label>
										<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
											{product.sizes.map((size, i) => (
												<RadioGroup.Option
													key={i}
													value={size}
													// disabled={!size.inStock}
													className={({ active }) =>
														classNames(
															size
																? "bg-white shadow-sm text-gray-900 cursor-pointer"
																: "bg-gray-50 text-gray-200 cursor-not-allowed",
															active ? "ring-2 ring-red-500" : "",
															"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
														)
													}
												>
													{({ active, checked }) => (
														<>
															<RadioGroup.Label as="span">
																{size}
															</RadioGroup.Label>
															{/* {size.inStock ? (
															<span
																className={classNames(
																	active ? "border" : "border-2",
																	checked
																		? "border-red-500"
																		: "border-transparent",
																	"absolute -inset-px rounded-md pointer-events-none"
																)}
																aria-hidden="true"
															/>
														) : (
															<span
																aria-hidden="true"
																className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
															>
																<svg
																	className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
																	viewBox="0 0 100 100"
																	preserveAspectRatio="none"
																	stroke="currentColor"
																>
																	<line
																		x1={0}
																		y1={100}
																		x2={100}
																		y2={0}
																		vectorEffect="non-scaling-stroke"
																	/>
																</svg>
															</span>
														)} */}
														</>
													)}
												</RadioGroup.Option>
											))}
										</div>
									</RadioGroup>
								</div>

								<button
									type="submit"
									className="mt-10 w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
								>
									Agregar al carrito
								</button>
							</form>
							{/* */}






							<div className="py-2 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
								{/* Description and details */}
								{/* <div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">{product.description}</p>
							</div>
						</div> */}

								{/* <div className="mt-10">
							<h3 className="text-sm font-medium text-gray-900">Highlights</h3>

							<div className="mt-4">
								<ul role="list" className="pl-4 list-disc text-sm space-y-2">
									{product.highlights.map((highlight) => (
										<li key={highlight} className="text-gray-400">
											<span className="text-gray-600">{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</div> */}

								<div className="mt-2">
									<h2 className="text-sm font-medium text-gray-900">Detalles</h2>

									<div className="mt-4 space-y-6">
										<p className="text-sm text-gray-600">{product.description}</p>
									</div>
								</div>
							</div>
							</div>
					</div>
				</div>
			</section>
		</>
	)
}
