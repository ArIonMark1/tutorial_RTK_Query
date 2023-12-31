import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notificationsApi = createApi({
  reducerPath: 'noteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64aadf5c0c6d844abedeef07.mockapi.io',
  }),
  tagTypes: ['notifications'], // обовязково для всiх запитiв, тег-iмя(1шт.) колекцii доних
  endpoints: builder => ({
    //
    getNotifications: builder.query({
      query: () => ({
        url: '/notifications',
        method: 'GET',
      }),
      providesTags: ['notifications'],
    }),
    //
    createNotification: builder.mutation({
      query: notificationData => ({
        url: '/notifications',
        method: 'POST',
        body: notificationData,
      }),
      invalidatesTags: ['notifications'],
    }),
    //
    deleteNotification: builder.mutation({
      query: id => ({
        url: `/notifications/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['notifications'],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useCreateNotificationMutation,
  useDeleteNotificationMutation,
} = notificationsApi;
