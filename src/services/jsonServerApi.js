import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// https://redux-toolkit.js.org/rtk-query/usage/queries
export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000/',
  }),
  tagTypes: ['Artists'],
  endpoints: (builder) => ({
    getArtists: builder.query({
      query: (artist) => ({
        url: `/api/music/search/${artist}`,
      })
    }),
  }),
});

export const { useGetArtistsQuery } = jsonServerApi;