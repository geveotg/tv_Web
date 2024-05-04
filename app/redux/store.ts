"use client";
import { filmsApi } from "./future/films/filmsApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [filmsApi.reducerPath]: filmsApi.reducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({}).concat([filmsApi.middleware]);
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
