import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentBackground: {
        name: "Forest",
        image: "/backgrounds/forest.jpg",
        audio: "/audios/forest.mp3",
    },
};

const backgroundSlice = createSlice({
    name: "background",

    initialState,

    reducers: {

        setBackground: (state, action) => {

            state.currentBackground =
                action.payload;

        },

    },

});

export const {
    setBackground,
} = backgroundSlice.actions;

export default backgroundSlice.reducer;