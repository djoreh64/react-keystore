import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  genre: {
    name: 'Все',
    genreProperty: 'all'
  },
  sort: {
    name: 'рейтингу',
    sortProperty: 'rating'
  }
} 

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setGenre(state, action) {
      state.genre = action.payload
    },
  }
})

export const { setGenre } = filterSlice.actions
export default filterSlice.reducer