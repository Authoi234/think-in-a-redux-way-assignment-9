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
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data: updatedTask } = await queryFulfilled;

                    // Update other related queries, if necessary
                    dispatch(
                        apiSlice.util.updateQueryData(
                            "getTasks", // Assuming 'getTasks' is your query key
                            undefined,
                            (draft) => {
                                const draftTask = draft.find((t) => t?.id == updatedTask?.id);
                                if (draftTask) {
                                    Object.assign(draftTask, updatedTask); // Merge the updated task
                                }
                            }
                        )
                    );
                } catch (err) {

                }
            }
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const pathResult = dispatch(
                    apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
                        const index = draft.findIndex((item) => item.id === arg);
                        if (index !== -1) {
                            draft.splice(index, 1); // Remove the task from the draft array
                        }
                    })
                );

                try {
                    await queryFulfilled;
                } catch (err) {
                    pathResult.undo();
                }
            }
        })
    })
})

export const { useGetTaskQuery, useGetTasksQuery, useUpdateTaskMutation, useDeleteTaskMutation } = tasksApi;