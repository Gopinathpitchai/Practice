import { createSlice } from "@reduxjs/toolkit";

export const counterReducer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    setValueChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValueChange } = counterReducer.actions;

export default counterReducer.reducer;
