import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const initialState = {
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
    },
    setSearchValue(state,action) {
      state.search = action.payload
    }
  }
})

export const getGenre = state => state.genres
export const { setGenre, setSort, setSortIcon, setSearchValue} = filterSlice.actions
export default filterSlice.reducer