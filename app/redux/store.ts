"use client";

import { configureStore } from "@reduxjs/toolkit";
import { CategoriesAPI } from "./categorises/getcategories";

export const store = configureStore({
    reducer: {
        [CategoriesAPI.reducerPath]:CategoriesAPI.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(CategoriesAPI.middleware)
    
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware({}).concat([sandalsApi.middleware]);
    // },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
