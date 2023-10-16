import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: [],
} 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
        const item = state.items.find(obj => obj.name === action.payload.name)
        if (item) {
          item.count++
        } else {
          state.items.push({
            ...action.payload,
            count: 1
          })
        }
        state.totalPrice = state.items.reduce((sum, item) => {
        return item.price + sum
      }, 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.name !== action.payload)
      state.totalPrice = state.totalPrice - action.payload.price
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price + sum
      }, 0)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer