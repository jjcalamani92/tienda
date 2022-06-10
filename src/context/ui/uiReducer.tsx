import { UiState } from "./";

type UiActionType = 
	| { type: "[UI] - ToggleMenu" }
	| { type: "[UI] - ToggleSearch" }
	| { type: "[UI] - ToggleCart" }

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
	switch (action.type) {
		case "[UI] - ToggleMenu":
			return {
				...state,
				isMenuOpen: !state.isMenuOpen
			};
		case "[UI] - ToggleSearch":
			return {
				...state,
				isSearchOpen: !state.isSearchOpen
			};
		case "[UI] - ToggleCart":
			return {
				...state,
				isCartOpen: !state.isCartOpen
			};

		default:
			return state;
	}
};
