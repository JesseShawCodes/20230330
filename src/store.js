import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/couterSlice'

import { pokemonApi } from './services/pokemon'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(pokemonApi.middleware),
})