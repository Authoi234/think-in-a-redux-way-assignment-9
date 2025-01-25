import { apiSlice } from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeam: builder.query({
            query: () => `/team/` 
        }),
        getTeamMember: builder.query({
            query: (id) => `/team/${id}/`
        })
    })
});

export const { useGetTeamQuery ,useGetTeamMemberQuery } = teamApi;