import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    currPage: 0,
  },
  reducers: {},
});

export default homeSlice.reducer;
