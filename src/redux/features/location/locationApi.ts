import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/location" }),
  endpoints: (builder) => ({
    getProvinces: builder.query<{ id: number; name: string }[], void>({
      query: () => "provinces",
    }),
    getCities: builder.query<
      { id: number; name: string }[],
      { provinceId: number; query?: string }
    >({
      query: ({ provinceId, query }) =>
        `cities?province_id=${provinceId}${query ? `&query=${query}` : ""}`,
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetProvincesQuery, useGetCitiesQuery } = locationApi;
