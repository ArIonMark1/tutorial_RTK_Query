// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiSlice } from './features/apiSlice/apiSlice';
import { contactApi } from './features/contactSlice/contactSlice';
import { notificationsApi } from './features/notificationSlice/notificationSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // reducerPath -> reducerPath: 'api',
    [contactApi.reducerPath]: contactApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    apiSlice.middleware,
    contactApi.middleware,
    notificationsApi.middleware,
  ],
});

setupListeners(store.dispatch);
