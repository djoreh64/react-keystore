import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice.ts'
import cart from './slices/cartSlice.ts'
import games from './slices/gamesSlice.ts'
import favourites from './slices/favouritesSlice.ts'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
     filter,
     cart,
     games,
     favourites
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>
