import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
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
    getHomeLongforData().then(res => {
      dispatch(changeLongforAction(res));
    });
    getHomePlusData().then(res => {
      dispatch(changeHomePlusAction(res));
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
    longforInfo: [],
    homePlusInfo: [],
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
    changeLongforAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changeHomePlusAction(state, { payload }) {
      state.homePlusInfo = payload;
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
  changeLongforAction,
  changeHomePlusAction,
} = homeSlice.actions;

export default homeSlice.reducer;
