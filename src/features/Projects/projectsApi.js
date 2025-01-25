import { apiSlice } from "../api/apiSlice";

export const projectsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => `/projects/` ,
        }),
        getProject: builder.query({
            query: (id) => `/projects/${id}/`
        })
    })
});

export const { useGetProjectsQuery ,useGetProjectQuery } = projectsApi;