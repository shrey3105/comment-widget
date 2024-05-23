import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputSlice";

const appStore = configureStore({
  reducer: {
    inputBox: inputReducer,
  },
});

export default appStore;
