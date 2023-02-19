import React, { memo, useEffect } from 'react';

import { MoreWrapper } from './style';

import MoreFilter from './c-cpns/more-filter';
import MoreRooms from './c-cpns/more-rooms';
import MorePagination from './c-cpns/more-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreDataAction } from '@/store/modules/more';

const more = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoreDataAction());
  }, [dispatch]);

  const { roomList, totalCount } = useSelector(state => ({
    roomList: state.more.roomList,
    totalCount: state.more.totalCount
  }));

  return (
    <MoreWrapper>
      <MoreFilter />
      <MoreRooms />
      <MorePagination />
    </MoreWrapper>
  );
});

export default more;
