import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMoreRoomList } from '@/services/modules/more';

export const fetchMoreDataAction = createAsyncThunk(
  'more/fetchData',
  async (payload, { getState, dispatch }) => {
    // 根据页码获取最新数据

    dispatch(changeIsLoadingAction(true));

    const res = await getMoreRoomList(payload * 20);
    const { list, totalCount } = res;

    // 将获取的最新数据保存到 store 中
    dispatch(changeRoomListAction(list));
    dispatch(changeTotalCountAction(totalCount));
    dispatch(changeIsLoadingAction(false));
  }
);

const moreSlice = createSlice({
  name: 'more',
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false
  },
  reducers: {
    changeRoomListAction(state, { payload }) {
      state.roomList = payload;
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload;
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    }
  }
});

export const {
  changeRoomListAction,
  changeTotalCountAction,
  changeIsLoadingAction
} = moreSlice.actions;

export default moreSlice.reducer;
