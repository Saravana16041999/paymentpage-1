import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Firstone: {
    id: 1,
    discount: "-18,321",
    price: "18,500",
    isActive: false,
  },
  Secondone: {
    id: 2,
    discount: "-9,000",
    price: "9,250",
    isActive: false,
  },
  Thirdone: {
    id: 3,
    discount: "4,526",
    price: "4,625",
    isActive: false,
  },
};

export const CourseSlice = createSlice({
  name: "courses",
  initialState,

  reducers: {
    ActiveSecondOne: (state) => {
      state.Secondone.isActive = true;
      state.Firstone.isActive = false;
      state.Thirdone.isActive = false;
    },

    ActiveFirstOne: (state) => {
      state.Firstone.isActive = true;
      state.Secondone.isActive = false;
      state.Thirdone.isActive = false;
    },
    ActiveThirdtOne: (state) => {
      state.Firstone.isActive = false;
      state.Secondone.isActive = false;
      state.Thirdone.isActive = true;
    },
  },
});

export const { ActiveSecondOne, ActiveFirstOne, ActiveThirdtOne } =
  CourseSlice.actions;

export default CourseSlice.reducer;
