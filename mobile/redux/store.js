import { configureStore } from "@reduxjs/toolkit";
import { mobileAuthApi } from "./apis/mobileAuthApi";
import { mobilePublicApi } from "./apis/mobilePublicApi";
import { mobileUserApi } from "./apis/mobileUserApi";
import mobileUserSlice from "./slices/mobileUserSlice";

const reduxStore = configureStore({
    reducer: {
        [mobileAuthApi.reducerPath]: mobileAuthApi.reducer,
        [mobilePublicApi.reducerPath]: mobilePublicApi.reducer,
        [mobileUserApi.reducerPath]: mobileUserApi.reducer,
        mobileUser: mobileUserSlice
    },
    middleware: def =>
        [...def(),
        mobileAuthApi.middleware,
        mobilePublicApi.middleware,
        mobileUserApi.middleware]
})

export default reduxStore