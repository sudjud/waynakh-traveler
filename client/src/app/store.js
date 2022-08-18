import { configureStore } from "@reduxjs/toolkit";
import place from "../features/placeSlice";
import user from "../features/userSlice";
import area from "../features/areaSlice"

export const store = configureStore({
  reducer: {
    place,
    user,
    area
  },
});
