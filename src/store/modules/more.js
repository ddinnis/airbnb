import { createSlice } from '@reduxjs/toolkit';

const moreSlice = createSlice({
  name: 'more',
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    }
  }
});

export default moreSlice.reducer;
