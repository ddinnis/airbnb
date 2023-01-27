import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
} from "@/services/modules/home";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  (payload, { dispatch }) => {
    // const res = await getHomeGoodPriceData(); return res
    getHomeGoodPriceData().then(res => {
      dispatch(changeGoodPriceAction(res));
    });
    getHomeHighScoreData().then(res => {
      dispatch(changeHighScoreAction(res));
    });
    getHomeDiscountData().then(res => {
      dispatch(changeHomeDiscountAction(res));
    });
    getHomeHotRecommendData().then(res => {
      dispatch(changeHotRecommendAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: [],
    highScoreInfo: [],
    homeDiscountInfo: [],
    hotRecommendInfo: [],
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeHomeDiscountAction(state, { payload }) {
      state.homeDiscountInfo = payload;
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommendInfo = payload;
    },
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload;
  //   },
  // },
});

export const {
  changeGoodPriceAction,
  changeHighScoreAction,
  changeHomeDiscountAction,
  changeHotRecommendAction,
} = homeSlice.actions;

export default homeSlice.reducer;
