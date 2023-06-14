import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from './features/counter/couterSlice'

import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { pokemonApi } from './services/pokemon'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(pokemonApi.middleware),
})