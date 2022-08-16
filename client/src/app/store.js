import { configureStore } from "@reduxjs/toolkit";
import place from "../features/placeSlice";


export const store = configureStore({
    reducer : {
        place
    }
})