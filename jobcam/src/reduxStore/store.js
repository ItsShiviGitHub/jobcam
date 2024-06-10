import { configureStore } from "@reduxjs/toolkit";
import jdStore from '../reduxSlice/jdSlice';


export const store = configureStore({
    reducer: {
        JD: jdStore,
    }
})