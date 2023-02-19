import { configureStore } from '@reduxjs/toolkit';

import homeReducer from './modules/home';
import moreReducer from './modules/more';
import detailReducer from './modules/detail';

const store = configureStore({
  reducer: { home: homeReducer, more: moreReducer, detail: detailReducer }
});

export default store;
