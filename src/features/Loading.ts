import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface InitialState {
  isLoading: true | false
}

const initialState: InitialState = {
  isLoading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },

    end: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { start, end } = loadingSlice.actions

export const selectLoading = (state: RootState) => state.loading.isLoading

export default loadingSlice.reducer
