import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    deleteCourse(state, action) {
      state.course = state.course.filter((item) => item.id !== action.payload);
    },
  },
});

export const { deleteCourse } = courseSlice.actions;
export default courseSlice.reducer;
