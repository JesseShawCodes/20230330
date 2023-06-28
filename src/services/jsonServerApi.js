import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000/',

  }),
  tagTypes: ['Albums'],
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (artist) => ({
        url: `/api/music/search/${artist}`,
      })
    }),
  }),
});

export const { useGetAlbumsQuery } = jsonServerApi;