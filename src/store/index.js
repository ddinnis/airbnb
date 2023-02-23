import { configureStore } from '@reduxjs/toolkit';

import homeReducer from './modules/home';
import moreReducer from './modules/more';
import detailReducer from './modules/detail';
import mainReducer from './modules/main';

const store = configureStore({
  reducer: {
    home: homeReducer,
    more: moreReducer,
    detail: detailReducer,
    main: mainReducer
  }
});

export default store;
