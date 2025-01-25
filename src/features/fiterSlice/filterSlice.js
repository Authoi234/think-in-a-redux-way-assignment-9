import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checked: []
};

const teamSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addChecked: (state, action) => {
            state.checked.push(action.payload);
        },
        removeChecked: (state, action) => {
            state.checked = state.checked?.filter(item => item?.id !== action.payload);
        }
    },
});

export const { addChecked, removeChecked } = teamSlice.actions;
export default teamSlice.reducer;