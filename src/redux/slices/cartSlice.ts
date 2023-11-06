import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
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
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.name !== action.payload)
      localStorage.clear();

    },
    decrementCount(state, action: PayloadAction<string>) {
      const cartItem = state.items.find(obj => obj.name === action.payload)
      if (cartItem) {
        cartItem.count--
      }
    },
    incrementCount(state, action: PayloadAction<string>) {
      const cartItem = state.items.find(obj => obj.name === action.payload)
      if (cartItem) {
        cartItem.count++
      }
    }
  }
})

export const { addItem, removeItem, decrementCount, incrementCount } = cartSlice.actions
export default cartSlice.reducer