import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL, credentials: "include" }),
    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {
            loginUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/auth/login-user",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                }
            }),

            registerAdmin: builder.mutation({
                query: (userData) => {
                    return {
                        url: "/auth/register-admin",
                        method: "POST",
                        body: userData
                    }
                },

            }),
            loginAdmin: builder.mutation({
                query: userData => {
                    return {
                        url: "/auth/login-admin",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("admin", JSON.stringify(data.result))
                    return data.result
                }
            }),
            logoutAdmin: builder.mutation({
                query: adminData => {
                    return {
                        url: "/auth/logout-admin",
                        method: "POST",
                        body: adminData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("admin")
                    return data.result
                }
            }),

        }
    }
})

export const {
    useRegisterAdminMutation,
    useLoginAdminMutation,
    useLogoutAdminMutation,
    useLoginUserMutation,
} = authApi
