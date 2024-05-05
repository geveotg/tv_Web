import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { requestQuery } from "@/app/components/requestQuery";

export const filmsApi = createApi({
    reducerPath: "film",
    baseQuery: fetchBaseQuery({ baseUrl: "http://vv.tvdev.club:8080/" }),
    endpoints: (builder) => ({
        getFilm: builder.query<any, {}>({
            query: (rquestPayload) =>
                `player_api.php${requestQuery(rquestPayload)}&action=get_vod_streams`,
        }),
    }),
});

export const { useGetFilmQuery } = filmsApi;
