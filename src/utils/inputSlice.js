import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "inputBox",
  initialState: {
    showInputBox: false,
  },
  reducers: {
    toggleInputBox: (state, action) => {
      state.showInputBox = action.payload;
    },
  },
});

export const { toggleInputBox } = inputSlice.actions;

export default inputSlice.reducer;
