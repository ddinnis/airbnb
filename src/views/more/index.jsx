import React, { memo } from 'react';

import { MoreWrapper } from './style';

import MoreFilter from './c-cpns/more-filter';
import MoreRooms from './c-cpns/more-rooms';
import MorePagination from './c-cpns/more-pagination';

const more = memo(() => {
  return (
    <MoreWrapper>
      <MoreFilter />
      <MoreRooms />
      <MorePagination />
    </MoreWrapper>
  );
});

export default more;
