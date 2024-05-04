import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filmsApi = createApi({
    reducerPath: 'film',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/' }),
    endpoints: (builder) => ({
        getFilm: builder.query({
            query: () => `api/json/v1/1/categories.php`
        })
    })
})

export const { useGetFilmQuery } = filmsApi