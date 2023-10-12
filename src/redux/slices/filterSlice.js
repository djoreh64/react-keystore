import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  genre: {
    name: 'Все',
    genreProperty: 'all'
  },
  sort: {
    name: 'рейтингу',
    sortProperty: 'rating'
  },
  sortIcon: false
} 

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setGenre(state, action) {
      state.genre = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setSortIcon(state,action) {
      state.sortIcon = action.payload
    }
  }
})

export const { setGenre, setSort, setSortIcon } = filterSlice.actions
export default filterSlice.reducer