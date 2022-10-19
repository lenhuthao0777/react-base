import { configureStore } from '@reduxjs/toolkit'

import loadingSlice from './../features/Loading'

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
