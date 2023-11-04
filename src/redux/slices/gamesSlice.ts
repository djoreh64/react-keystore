import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

type ParamsType = {
  genreValue: {
    genreProperty: string,
    name: string
  },
  sortType: {
    sortProperty: string,
    name: string
  },
  sortIcon: boolean,
  currentPage: number
}

type GameType = {
  id: string,
  price: number,
  name: string,
  cover: string,
  count: number
}

interface GamesState {
  games: GameType[],
  status: string
}

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (params: ParamsType) => {
    const {genreValue,
      sortType,
      sortIcon,
      currentPage} = params
    const { data } = await axios.get(`https://6516e83f09e3260018ca764a.mockapi.io/items?genres=${genreValue.genreProperty !== 'all' ? `${genreValue.genreProperty}` : ``}&sortBy=${sortType.sortProperty}${sortIcon ? '&order=asc' : '&order=desc'}&page=${currentPage + 1}&limit=20`)
    return data
  }
)

const initialState: GamesState = {
  games: [],
  status: 'loading'
} 

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames(state, action: PayloadAction<GameType[]>) {
        state.games = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.games = []
      state.status = 'loading'
    })

    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.games = action.payload
      state.status = 'success'
    })

    builder.addCase(fetchGames.rejected, (state) => {
      state.games = []
      state.status = 'error'
    })
  }
})

export default gamesSlice.reducer