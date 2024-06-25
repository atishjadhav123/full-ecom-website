import { createSlice } from "@reduxjs/toolkit";
import { mobileAuthApi } from "../apis/mobileAuthApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const mobileAuthSlice = createSlice({
    name: "mobileAuthSlice",
    initialState: { mobileUser: (AsyncStorage.getItem("mobileAuth")) },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(mobileAuthApi.endpoints.mobileLoginUser.matchFulfilled, (state, { payload }) => {
            state.mobileUser = payload
        })

})

// export const { invalidate } = mobileAuthSlice.actions
export default mobileAuthSlice.reducer