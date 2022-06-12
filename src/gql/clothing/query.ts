import { gql } from "@apollo/client";

export const SITE = gql`
	query Site($id: String!) {
		site(id: $id) {
			name
		}
	}
`;

export const SITES = gql`
	query Sites {
		sites {
			_id
			title
			categories {
				name
				href
				description
				imageSrc
				imageAlt
			}
		}
	}
`;

export const SITEBYSECTION = gql`
	query Site($id: String!) {
		site(id: $id) {
			categories {
				name
				href
				sections {
					name
					href
					description
					imageSrc
					imageAlt
				}
				featured {
          name
					href
					description
					imageSrc
					imageAlt
        }
			}
		}
	}
`;

export const SITEBYITEM = gql`
	query Site($id: String!) {
		site(id: $id) {
			categories {
				name
				href
				sections {
					name
					href
					items {
						name
						href
						description
						imageSrc
						imageAlt
					}
				}
			}
		}
	}
`;

export const PRODUCTS = gql`
	query ClothingAll($site: String!) {
		clothingAll(site: $site) {
			name
			image
			price
			description
			category
			section
			item
			slug
		}
	}
`;

export const CATEGORY = gql`
	query ClothingAll($site: String!) {
		clothingAll(site: $site) {
			category
		}
	}
`;
export const SECTION = gql`
	query ClothingAll($site: String!) {
		clothingAll(site: $site) {
			category
			section
		}
	}
`;
export const ITEM = gql`
	query ClothingAll($site: String!) {
		clothingAll(site: $site) {
			category
			section
			item
		}
	}
`;

export const PRODUCT_UPDATE = gql`
	query Wears {
		Wears {
			_id
			name
			brand
			description
			image
			inStock
			slug
			line
			category
			price
			tags
		}
	}
`;

export const PRODUCTS_BY_ITEM = gql`
	query ClothingByCategoryAndSectionAndItem($category: String!, $section: String!, $item: String!, $site: String!) {
		clothingByCategoryAndSectionAndItem(category: $category, section: $section, item: $item, site: $site) {
			name
			price
			image
			slug
		}
	}
`;
export const PRODUCTS_BY_SECTION = gql`
	query ClothingByCategoryAndSectionAndItem($category: String!, $section: String!, $item: String!, $site: String!) {
		clothingByCategoryAndSectionAndItem(category: $category, section: $section, item: $item, site: $site) {
			name
			price
			image
			slug
		}
	}
`;
export const PRODUCTS_BY_GENDER = gql`
	query wearByGender($gender: String!) {
		wearByGender(gender: $gender) {
			name
			image
			price
			description
			category
			gender
			slug
		}
	}
`;
export const PRODUCTS_BY_GENDER_AND_BY_CATEGORY = gql`
	query WearByGenderAndCategory($gender: String!, $category: String!) {
		wearByGenderAndCategory(gender: $gender, category: $category) {
			name
			image
			price
			description
			category
			gender
			slug
		}
	}
`;

export const PRODUCT_BY_SLUG = gql`
	query WearBySlug($slug: String!) {
		wearBySlug(slug: $slug) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			category
			gender
			price
			oldPrice
			tags
		}
	}
`;
export const PRODUCT_ALL = gql`
	query WearsAll($limit: Float!, $offset:Float!) {
		wearsAll(listWearsInput:  { limit: $limit, offset: $offset}) {
			_id
			name
			brand
			description
			image
			inStock
			slug
			gender
			category
			price
			tags
		}

}
`
export const PRODUCT_BY_PAGINATION = gql`
	query ListWearsWithCursor($after: String) {
		listWearsWithCursor(args: { first: 10, after: $after }) {
			page {
				edges {
					node {
						_id
						name
					}
				}
				pageInfo {
					startCursor
					endCursor
					hasPreviousPage
					hasNextPage
				}
			
			}
			pageData{
				count
				limit
				offset
			}
		}
	}
`;
