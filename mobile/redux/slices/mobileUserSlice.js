import { createSlice } from "@reduxjs/toolkit";

const mobileUserSlice = createSlice({
    name: "mobileUserSlice",
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, { payload }) => {
            state.cart = [...state.cart, payload]
        },
        emptyCart: (state, { payload }) => {
            state.cart = []
        },
        removeCart: (state, { payload }) => {
            state.cart = state.cart.filter(item => item._id !== payload)
        },
    },
    extraReducers: builder => builder

})

export const { addToCart, emptyCart, removeCart } = mobileUserSlice.actions
export default mobileUserSlice.reducer