import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63066deadde73c0f845a7350.mockapi.io/',
  }),
  endpoints: build => ({
    getContactByName: build.query({
      query: name => `${name}`,
    }),
    addContact: build.mutation({
      query: contact => ({
        url: `contacts`,
        method: 'POST',
        body: contact,
      }),
    }),
    deleteContact: build.mutation({
      query: contact => ({
        url: `contacts/${contact.id}`,
        method: 'DELETE',
        contact,
      }),
    }),
  }),
});

export const {
  useGetContactByNameQuery,
  reducerPath,
  reducer,
  middleware,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
