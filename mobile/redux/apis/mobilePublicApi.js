import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const mobilePublicApi = createApi({
    reducerPath: "mobilePublicApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://full-ecom.onrender.com/api/public", credentials: "include"
    }),
    tagTypes: ["mobilePublic"],
    endpoints: (builder) => {
        return {
            publicGetAllProduct: builder.query({
                query: () => {
                    return {
                        url: "/Products",
                        method: "GET"
                    }
                },
                providesTags: ["mobilePublic"]
            }),
            publicGetProductDetails: builder.query({
                query: (Product) => {
                    return {
                        url: `/Products/${Product._id}`,
                        method: "GET"
                    }
                },
                providesTags: ["mobilePublic"]
            }),
        }
    }
})

export const {
    useLazyPublicGetAllProductQuery,
    usePublicGetAllProductQuery,
    usePublicGetProductDetailsQuery,
} = mobilePublicApi
