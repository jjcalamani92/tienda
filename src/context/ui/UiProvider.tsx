import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { Site } from "../../interfaces";
import { UiContext, uiReducer } from "./";

export interface UiState {
	isMenuOpen: boolean;
	isSearchOpen: boolean;
	isCartOpen: boolean;
	site: Site
}

const UI_INITIAL_STATE: UiState = {
	isMenuOpen: false,
	isSearchOpen: false,
	isCartOpen: false,
	site: {
		title: "piccoletti",
		domain: "piccoletti.com",
		logo: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647095547/piccoletti-logo_j6hxbw.jpg",
		numberPhone: "68175851",
		address: "av fatima",
		type: "ecommerce",
		categories: [
			{
				_id: 'e5b233c5-574a-40bd-a195-38013bd145a2',
				name: 'mujer',
				href: 'mujer',
				description: 'ropa para mujer',
				imageSrc: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1654434349/piccoletti/catetgory/ropa-mujer-casual-1-820x1024_dz7tnj.jpg',
				imageAlt: 'ropa de mujer',
				featured: [
					{
						_id: "b6a5d7cb-c9f1-44e9-b067-da3fe0b66619",
						name: 'recien llegados',
						href: 'recien-llegados',
						imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
						imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
					},
					{
						_id: "5cea4a61-f8c4-4b78-88d0-fb856c8ef271",
						name: 'desde la fabrica',
						href: 'desde-la-fabrica',
						imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
						imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
					},
				],
				sections: [
					{
						_id: "48eba307-1a8d-4b94-91ec-b70a8929f706",
						name: 'ropa',
						href: 'ropa',
						items: [
							{
								_id: "3140f056-4dd2-4575-86f1-d55e45707af7",
								name: 'tops',
								href: 'tops',
								description: 'ropa para mujer',
								imageSrc: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1654434349/piccoletti/catetgory/ropa-mujer-casual-1-820x1024_dz7tnj.jpg',
								imageAlt: 'ropa de mujer',
							},
							{
								_id: "3140f056-4dd2-4575-86f1-d55e45707af8",
								name: 'chamarras',
								href: 'chamarras',
								description: 'ropa para mujer',
								imageSrc: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1654434349/piccoletti/catetgory/ropa-mujer-casual-1-820x1024_dz7tnj.jpg',
								imageAlt: 'ropa de mujer',
							},
							{
								_id: "3140f056-4dd2-4575-86f1-d55e45707234",
								name: 'leggins',
								href: 'leggins',
								description: 'ropa para mujer',
								imageSrc: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1654434349/piccoletti/catetgory/ropa-mujer-casual-1-820x1024_dz7tnj.jpg',
								imageAlt: 'ropa de mujer',
							},

							// { name: 'Dresses', href: '#' },
							// { name: 'Pants', href: '#' },
							// { name: 'Denim', href: '#' },
							// { name: 'Sweaters', href: '#' },
							// { name: 'T-Shirts', href: '#' },
							// { name: 'Jackets', href: '#' },
							// { name: 'Activewear', href: '#' },
							// { name: 'Browse All', href: '#' },
						],
					},
					{
						_id: "48eba307-1a8d-4b94-91ec-b70a8929f708",
						name: 'accesorios',
						href: 'accesorios',
						items: [
							{ name: 'Watches', href: '#' },
							{ name: 'Wallets', href: '#' },
							{ name: 'Bags', href: '#' },
							{ name: 'Sunglasses', href: '#' },
							{ name: 'Hats', href: '#' },
							{ name: 'Belts', href: '#' },
						],
					},
					{
						_id: "48eba307-1a8d-4b94-91ec-b70a8929f709",
						name: 'marcas',
						href: 'marcas',
						items: [
							{ name: 'Full Nelson', href: '#' },
							{ name: 'My Way', href: '#' },
							{ name: 'Re-Arranged', href: '#' },
							{ name: 'Counterfeit', href: '#' },
							{ name: 'Significant Other', href: '#' },
						],
					},
				],
			},
			{
				_id: 'men',
				name: 'Men',
				featured: [
					{
						name: 'New Arrivals',
						href: '#',
						imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
						imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
					},
					{
						name: 'Artwork Tees',
						href: '#',
						imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
						imageAlt:
							'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
					},
				],
				sections: [
					{
						_id: 'clothing',
						name: 'Clothing',
						items: [
							{ name: 'Tops', href: '#' },
							{ name: 'Pants', href: '#' },
							{ name: 'Sweaters', href: '#' },
							{ name: 'T-Shirts', href: '#' },
							{ name: 'Jackets', href: '#' },
							{ name: 'Activewear', href: '#' },
							{ name: 'Browse All', href: '#' },
						],
					},
					{
						_id: 'accessories',
						name: 'Accessories',
						items: [
							{ name: 'Watches', href: '#' },
							{ name: 'Wallets', href: '#' },
							{ name: 'Bags', href: '#' },
							{ name: 'Sunglasses', href: '#' },
							{ name: 'Hats', href: '#' },
							{ name: 'Belts', href: '#' },
						],
					},
					{
						_id: 'brands',
						name: 'Brands',
						items: [
							{ name: 'Re-Arranged', href: '#' },
							{ name: 'Counterfeit', href: '#' },
							{ name: 'Full Nelson', href: '#' },
							{ name: 'My Way', href: '#' },
						],
					},
				],
			},
		],
		pages: [
			{ name: 'Company', href: '#' },
			{ name: 'Stores', href: '#' },
		],
	}
};

export const UiProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [site, setSite] = useState([]);
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
	useEffect(() => {
		fetch(`${process.env.APIS_URL}/api/site/62a4c6e0c797b74eed804f44`)
			.then(res => res.json())
			.then(data => {
				dispatch({
	 				type: '[UI] - initialSite',
					payload: data
				})
			})
	}, [])
	// useEffect(() => {
	//   fetch('http://localhost:8000/api/robots')
	//     .then(res => res.json())
	//     .then(data => {
	//       dispatch({
	// 				type: '[UI] - initialSite',
	//         payload: {
	//           ...UI_INITIAL_STATE,
	//           sites: data?.data,
	//         }
	//       });
	//     });
	// }, []);


	const toggleSideMenu = () => {
		dispatch({ type: "[UI] - ToggleMenu" });
	};
	const toggleSideSearch = () => {
		dispatch({ type: "[UI] - ToggleSearch" });
	};
	const toggleSideCart = () => {
		dispatch({ type: "[UI] - ToggleCart" });
	};

	return (
		<UiContext.Provider
			value={{
				...state,

				// Methods
				toggleSideMenu,
				toggleSideSearch,
				toggleSideCart,

			}}
		>
			{children}
		</UiContext.Provider>
	);
};
