import { configureStore } from "@reduxjs/toolkit";
import backgroundReducer from './features/backgroundSlice';

export const store  = configureStore({
    reducer:{
        background: backgroundReducer,
    }
})