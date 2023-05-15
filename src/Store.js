import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./featurs/Course/CourseSlice";

export const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});
