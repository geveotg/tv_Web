import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CategoriesAPI = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://vv.tvdev.club:8080/' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `player_api.php$%7BrequestQuery(%7B`,
        }),
    }),
})

export const { useGetCategoriesQuery } = CategoriesAPI;