import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { requestQuery } from "@/app/components/requestQuery";

export const filmsApi = createApi({
    reducerPath: "film",
    baseQuery: fetchBaseQuery({ baseUrl: "http://vv.tvdev.club:8080/" }),
    endpoints: (builder) => ({
        getFilm: builder.query<any, {}>({
            query: (reqpay) =>
                `player_api.php${requestQuery(reqpay)}&action=get_vod_streams`,
        }),
        getCategories: builder.query<any, {}>({
            query: (queryPayload) =>
                `player_api.php${requestQuery(queryPayload)}&action=get_vod_categories`,
        }),
    }),
});

export const { useGetFilmQuery, useGetCategoriesQuery } = filmsApi;
