import { configureStore } from "@reduxjs/toolkit";
import place from "../features/placeSlice";
import user from "../features/userSlice";
import area from "../features/areaSlice";
import trip from "../features/tripSlice";
import comment from "../features/commentSlice";

export const store = configureStore({
  reducer: {
    place,
    user,
    area,
    trip,
    comment,
  },
});
