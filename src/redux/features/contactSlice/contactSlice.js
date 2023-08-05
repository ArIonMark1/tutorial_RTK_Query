// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64aadf5c0c6d844abedeef07.mockapi.io',
  }),
  tagTypes: ['contacts'], // обовязково для всiх запитiв, тег-iмя(1шт.) колекцii доних
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'], // обовязково для всiх запитiв, кожний тип даних повинен мати свiй тег який iдентифiкує ресурс, по цьому тегу при будь-якій зміні колекції компонент буде перебудовуватись
      // providesTags вказує з яким тегом йде колекція, по якому тегу буде писатись Redux state(можемо прописувати або масив або функцію)
    }),
    createContact: builder.mutation({
      query: data => ({
        url: '/contacts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['contacts'], // колекція даних  'contacts' вона інвалідується і її потрібно змінити правильно - перемалювати
    }), // for POST requests
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }), // for DELETE requests
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactApi; // use + "custom builder Name" + Query - для вибірки дагих, тільки GET-запити. Для POST-запитів: use + "custom builder Name" + Mutation
// типу екшени/операції та слайс із редюсерами все в одній кучі, яка буде пиздос яка громадна при норм проекті
// =================================================================
