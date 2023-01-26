import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/services/modules/home";

export const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
  const res = await getHomeGoodPriceData();
  return res;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: [],
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log("payload", payload);

      state.goodPriceInfo = payload;
    },
  },
});

export const { changeGoodPriceAction } = homeSlice.actions;
export default homeSlice.reducer;
