import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: string, 
  name: string,
  price: number, 
  count: number,
  cover: string
}

interface CartSliceState {
  totalPrice: number,
  items: CartItem[]
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: []
} 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload)
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price*item.count + sum
      }, 0)
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.name !== action.payload)
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price*item.count + sum
      }, 0)
    },
    decrementCount(state, action: PayloadAction<string>) {
      const cartItem = state.items.find(obj => obj.name === action.payload)
      if (cartItem) {
        cartItem.count--
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price*item.count + sum
      }, 0)
    },
    incrementCount(state, action: PayloadAction<string>) {
      const cartItem = state.items.find(obj => obj.name === action.payload)
      if (cartItem) {
        cartItem.count++
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price*item.count + sum
      }, 0)
    }
  }
})

export const { addItem, removeItem, decrementCount, incrementCount } = cartSlice.actions
export default cartSlice.reducer