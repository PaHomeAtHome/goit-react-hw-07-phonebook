import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63066deadde73c0f845a7350.mockapi.io/',
  }),
  endpoints: builder => ({
    getContactByName: builder.query({
      query: name => `${name}`,
    }),
  }),
});

export const { useGetContactByNameQuery } = contactsApi;
