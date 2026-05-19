
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedBg: "/backgrounds/forest.jpg",
};

const backgroundSlice = createSlice({
    name: "background",
    initialState,
    reducers: {
        setBackground: (state, action) => {
            state.selectedBg = action.payload;
        },
    },
});

export const {
    setBackground,
} = backgroundSlice.actions;

export default backgroundSlice.reducer;