import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// https://redux-toolkit.js.org/rtk-query/usage/queries
export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.REACT_APP_SERVER,
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