import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const mobileUserApi = createApi({
    reducerPath: "mobileUserApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://full-ecom.onrender.com/api/user", credentials: "include" }),
    tagTypes: ["mobileUser"],
    endpoints: (builder) => {
        return {
            userGetAllOrders: builder.query({
                query: (orderData) => {
                    return {
                        url: `/get-orders/${orderData._id}`,
                        method: "GET"
                    }
                },
                providesTags: ["mobileUser"]
            }),
            userGetOrderDetails: builder.query({
                query: (orderDetails) => {
                    return {
                        url: `/get-orders-details/${orderDetails._id}`,
                        method: "GET"
                    }
                },
                providesTags: ["mobileUser"]
            }),
            userUpdatePassword: builder.mutation({
                query: userData => {
                    return {
                        url: `/update-password/${userData._id}`,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["mobileUser"]
            }),
            userPlacedOrder: builder.mutation({
                query: userData => {
                    return {
                        url: "/order-placed",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["mobileUser"]
            }),
            userCancelOrder: builder.mutation({
                query: userData => {
                    return {
                        url: `order-cancel/${userData._id}`,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["mobileUser"]
            }),

        }
    }
})

export const {
    useUserGetAllOrdersQuery,
    useUserGetOrderDetailsQuery,
    useUserUpdatePasswordMutation,
    useUserPlacedOrderMutation,
    useUserCancelOrderMutation,
} = mobileUserApi
