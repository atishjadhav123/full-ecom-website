import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["order", "product", "user"],
    endpoints: (builder) => {
        return {
            // ORDER
            getAllOrders: builder.query({
                query: () => {
                    return {
                        url: "/api/admin/orders",
                        method: "GET"
                    }
                },
                // providesTags: ["order"]
                transformResponse: data => data.result
            }),
            getAllOrderDetails: builder.query({
                query: (orderData) => {
                    return {
                        url: `/api/admin/order-details/${orderData._id}`,
                        method: "GET"
                    }
                },
                // providesTags: ["order"]
                transformResponse: data => data.result
            }),
            cancelOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: `/api/admin/cancel-order/${orderData._id}`,
                        method: "PUT",
                        body: orderData
                    }
                },
                invalidatesTags: ["order"]
            }),
            updateOrderStatus: builder.mutation({
                query: orderData => {
                    return {
                        url: `/api/admin/update-order-status/${orderData._id}`,
                        method: "PUT",
                        body: orderData
                    }
                },
                invalidatesTags: ["order"]
            }),

            // PRODUCT
            getAllProducts: builder.query({
                query: () => {
                    return {
                        url: `/api/admin/products`,
                        method: "GET"
                    }
                },
                // providesTags: ["product"]
                transformResponse: data => data.result
            }),
            getAllProductDetails: builder.query({
                query: (productData) => {
                    return {
                        url: `/api/admin/product-details/${productData._id}`,
                        method: "GET"
                    }
                },
                // providesTags: ["product"]
                transformResponse: data => data.result
            }),
            AdminaddProduct: builder.mutation({
                query: productData => {
                    return {
                        url: `/api/admin/add-product`,
                        method: "POST",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            AdminupdateProduct: builder.mutation({
                query: productData => {
                    return {
                        url: `/api/admin/update-product/${productData._id}`,
                        method: "PUT",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            AdmindeleteProduct: builder.mutation({
                query: id => {
                    return {
                        url: `/api/admin/delete-product/${id}`,
                        method: "DELETE",
                        // body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            deActivateProduct: builder.mutation({
                query: productData => {
                    return {
                        url: `/api/admin/deactivate-product/${productData._id}`,
                        method: "PUT",
                        // body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            ActivateProduct: builder.mutation({
                query: productData => {
                    return {
                        url: `/api/admin/activate-product/${productData._id}`,
                        method: "PUT",
                        // body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),

            // USER
            getAllUsers: builder.query({
                query: () => {
                    return {
                        url: "/api/admin/users",
                        method: "GET"
                    }
                },
                // providesTags: ["user"]
                transformResponse: data => data.result
            }),
            getAllUserDetails: builder.query({
                query: (userData) => {
                    return {
                        url: `/api/admin/user-details/${userData._id}`,
                        method: "GET"
                    }
                },
                // providesTags: ["user"]
                transformResponse: data => data.result
            }),
            getUserOrders: builder.query({
                query: (userData) => {
                    return {
                        url: `/api/admin/user-order/${userData._id}`,
                        method: "GET"
                    }
                },
                // providesTags: ["user"]
                transformResponse: data => data.result
            }),
            blockUser: builder.mutation({
                query: userData => {
                    return {
                        url: `/api/admin/block-user/${userData._id}`,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
            unblockUser: builder.mutation({
                query: userData => {
                    return {
                        url: `/api/admin/unblock-user/${userData._id}`,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),

        }
    }
})

export const {
    // ORDER
    useGetAllOrderDetailsQuery,
    useGetAllOrdersQuery,
    useCancelOrderMutation,
    useUpdateOrderStatusMutation,
    // USER
    useGetAllUsersQuery,
    useGetAllUserDetailsQuery,
    useGetUserOrdersQuery,
    useBlockUserMutation,
    useUnblockUserMutation,
    // PRODUCT
    useGetAllProductsQuery,
    useGetAllProductDetailsQuery,
    useAdminaddProductMutation,
    useAdminupdateProductMutation,
    useAdmindeleteProductMutation,
    useDeActivateProductMutation,
    useActivateProductMutation
} = adminApi
