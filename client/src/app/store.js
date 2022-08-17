import { configureStore } from "@reduxjs/toolkit";
import place from "../features/placeSlice";
import user from "../features/userSlice";

export const store = configureStore({
  reducer: {
    place,
    user,
  },
});
