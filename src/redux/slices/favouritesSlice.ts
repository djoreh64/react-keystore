import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFavouriteItems } from '../../utils/getFavouriteItems';

type FavouriteItem = {
  id: string,
  name: string,
  price: number,
  cover: string
}

interface FavouritesState {
  items: FavouriteItem[]
}

const initialState: FavouritesState = {
	items: getFavouriteItems()
}; 

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addFavourite(state, action: PayloadAction<FavouriteItem>) {
			state.items.push(action.payload);
		},
		removeFavourite(state, action: PayloadAction<string>) {
			state.items = state.items.filter(item => item.name !== action.payload);
		}
	}
});

export const { addFavourite, removeFavourite} = favouritesSlice.actions;
export default favouritesSlice.reducer;