import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GenreType = {
  name: string,
  genreProperty: string
}

type SortType = {
  name: string,
  sortProperty: string
}

interface FilterState {
  search: string,
  genre: GenreType,
  sort: SortType,
  sortIcon: boolean
}

const initialState: FilterState = {
	search: '',
	genre: {
		name: 'Все',
		genreProperty: 'all'
	},
	sort: {
		name: 'рейтингу',
		sortProperty: 'rating'
	},
	sortIcon: false
}; 

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setGenre(state, action: PayloadAction<GenreType>) {
			state.genre = action.payload;
		},
		setSort(state, action: PayloadAction<SortType>) {
			state.sort = action.payload;
		},
		setSortIcon(state,action: PayloadAction<boolean>) {
			state.sortIcon = action.payload;
		},
		setSearchValue(state,action: PayloadAction<string>) {
			state.search = action.payload;
		}
	}
});

export const getGenre = state => state.genres;
export const { setGenre, setSort, setSortIcon, setSearchValue} = filterSlice.actions;
export default filterSlice.reducer;