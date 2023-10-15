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
        state.items.push(action.payload)  
        state.totalPrice = state.items.reduce((sum, item) => {
        return item.price + sum
      }, 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.name !== action.payload)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer