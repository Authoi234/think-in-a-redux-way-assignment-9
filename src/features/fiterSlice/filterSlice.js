import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checked: [],
    searchText: ""
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
        },
        changeSearchText: (state, action) => {
            state.searchText = action.payload;
        }
    },
});

export const { addChecked, removeChecked, changeSearchText } = teamSlice.actions;
export default teamSlice.reducer;