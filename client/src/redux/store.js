import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./apis/adminApi";
import { authApi } from "./apis/authApi";
import authSlice from "./slices/authSlice";


const reduxStore = configureStore({
    reducer: {
        [adminApi.reducerPath]: adminApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), adminApi.middleware, authApi.middleware]
})

export default reduxStore