import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: "1",
      category: "CSPM",
      name: "Cloud security posture management",
      text: "Cloud security posture management (CSPM) is the practice of controlling public cloud infrastructure risk..",
    },
  ],
};

const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      state.categories.push(action.payload);
    },
    removeWidget: (state, action) => {
      console.log("rech here");
      state.categories = state.categories.filter(
        (widget) => widget.id !== action.payload
      );
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addWidget, removeWidget, addCategory } = widgetSlice.actions;

export default widgetSlice.reducer;
