import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import games from './slices/gamesSlice'
import favourites from './slices/favouritesSlice'

export const store = configureStore({
  reducer: {
     filter,
     cart,
     games,
     favourites
  },
})