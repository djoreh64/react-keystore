import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (params) => {
    const {genreValue,
      sortType,
      sortIcon,
      currentPage} = params
    const { data } = await axios.get(`https://6516e83f09e3260018ca764a.mockapi.io/items?genres=${genreValue.genreProperty !== 'all' ? `${genreValue.genreProperty}` : ``}&sortBy=${sortType.sortProperty}${sortIcon ? '&order=asc' : '&order=desc'}&page=${currentPage + 1}&limit=20`)
    return data
  }
)

const initialState = {
  games: [],
  status: 'loading'
} 

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames(state, action) {
        state.games = action.payload
    }
  },

  extraReducers: {
    [fetchGames.pending]: (state, action) => {
      state.games = []
      state.status = 'loading'
    },
    [fetchGames.rejected]: (state, action) => {
      state.games = []
      state.status = 'error'
    },
    [fetchGames.fulfilled]: (state, action) => {
      state.games = action.payload
      state.status = 'success'
    }
  }
})

export default gamesSlice.reducer