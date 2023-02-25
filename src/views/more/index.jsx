import React, { memo, useEffect } from 'react';

import { MoreWrapper } from './style';

import MoreFilter from './c-cpns/more-filter';
import MoreRooms from './c-cpns/more-rooms';
import MorePagination from './c-cpns/more-pagination';

import { useDispatch } from 'react-redux';

import { fetchMoreDataAction } from '@/store/modules/more';
import { changeHeaderConfigAction } from '@/store/modules/main';

const more = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoreDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true,topAlpha:false }));
  }, [dispatch]);

  // const { roomList, totalCount } = useSelector(state => ({
  //   roomList: state.more.roomList,
  //   totalCount: state.more.totalCount
  // }));

  return (
    <MoreWrapper>
      <MoreFilter />
      <MoreRooms />
      <MorePagination />
    </MoreWrapper>
  );
});

export default more;
