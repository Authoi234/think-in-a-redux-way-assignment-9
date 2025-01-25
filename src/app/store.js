import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import projectsSlice from "../features/Projects/projectsSlice";
import teamSlice from "../features/team/teamSlice";
import tasksSlice from "../features/tasks/tasksSlice";
import filterSlice from "../features/fiterSlice/filterSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    projects : projectsSlice,
    team: teamSlice,
    tasks: tasksSlice,
    filter: filterSlice
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});
