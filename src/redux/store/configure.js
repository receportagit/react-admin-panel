import { configureStore } from '@reduxjs/toolkit';
import context from '../context/context';
import { api } from '../data/api';

export const store = configureStore({
  reducer: {
    context: context,
    [api.reducerPath]: api.reducer, // RTK Query reducer
  },

  // RTK Query middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;
