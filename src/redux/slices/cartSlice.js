import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: []
} 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload)
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price*item.count + sum
      }, 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.name !== action.payload)
      state.totalPrice = state.totalPrice - action.payload.price
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price*item.count + sum
      }, 0)
    },
    decrementCount(state, action) {
      const cartItem = state.items.find(obj => obj.name === action.payload)
      cartItem.count--
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price*item.count + sum
      }, 0)
    },
    incrementCount(state, action) {
      const cartItem = state.items.find(obj => obj.name === action.payload)
      cartItem.count++
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price*item.count + sum
      }, 0)
    }
  }
})

export const { addItem, removeItem, decrementCount, incrementCount } = cartSlice.actions
export default cartSlice.reducer