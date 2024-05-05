import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { requestQuery } from "@/app/components/requestQuery";
export const CategoriesAPI = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({ baseUrl: "http://vv.tvdev.club:8080/" }),
    endpoints: (builder) => ({
        getCategories: builder.query<any, {}>({
            query: (queryPayload) =>
                `player_api.php${requestQuery(queryPayload)}&action=get_vod_categories`,
        }),
    }),
});

export const { useGetCategoriesQuery } = CategoriesAPI;
