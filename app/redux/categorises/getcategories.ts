import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CategoriesAPI = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories.php`,
        }),
    }),
})

export const { useGetCategoriesQuery } = CategoriesAPI;