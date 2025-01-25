import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => `/tasks`
        }),
        getTask: builder.query({
            query: (id) => `/tasks/${id}`
        }),
        updateTask: builder.mutation({
            query: ({id, data}) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data,
            })
        })
    })
})

export const {useGetTaskQuery, useGetTasksQuery} = tasksApi;