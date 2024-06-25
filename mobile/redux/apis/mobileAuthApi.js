import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const mobileAuthApi = createApi({
    reducerPath: "mobileAuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://full-ecom.onrender.com", credentials: "include"
    }),
    tagTypes: ["mobileAuth"],
    endpoints: (builder) => {
        return {
            mobileGetUsers: builder.query({
                query: () => {
                    return {
                        url: "/api/auth/users",
                        method: "GET"
                    }
                },
                providesTags: ["mobileAuth"]
            }),
            mobileRegisterUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/api/auth/register-user",
                        method: "POST",
                        body: userData
                    }

                },
                // invalidatesTags: ["mobileAuth"]
            }),
            mobileLoginUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/api/auth/login-user",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    return data.result
                }
                // invalidatesTags: ["mobileAuth"]
            }),

        }
    }
})

export const {
    useMobileGetUsersQuery,
    useMobileRegisterUserMutation,
    useMobileLoginUserMutation
} = mobileAuthApi


// registerUser
// loginUser