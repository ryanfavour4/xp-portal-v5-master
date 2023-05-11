import { configureStore } from "@reduxjs/toolkit";
import FacultyReducer from "./features/FacultySlice";

export default configureStore({
  reducer: {
   faculty: FacultyReducer,
  },
});