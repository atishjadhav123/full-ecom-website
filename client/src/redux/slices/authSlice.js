import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";


const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        admin: JSON.parse(localStorage.getItem("admin")),
        user: JSON.parse(localStorage.getItem("user"))

    },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.loginAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.logoutAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })

})

// export const { invalidate } = authSlice.actions
export default authSlice.reducer