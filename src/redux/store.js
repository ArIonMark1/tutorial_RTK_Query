// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiSlice } from './features/apiSlice/apiSlice';
import { contactApi } from './features/contactSlice/contactSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // reducerPath -> reducerPath: 'api',
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    apiSlice.middleware,
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
