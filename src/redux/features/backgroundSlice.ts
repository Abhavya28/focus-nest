
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedBg: "/backgrounds/rain.jpg",
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