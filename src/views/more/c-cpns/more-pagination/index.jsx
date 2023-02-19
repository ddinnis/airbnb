import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import MorePaginationWrapper from './style';
import { fetchMoreDataAction } from '@/store/modules/more';
import Pagination from '@mui/material/Pagination';

const MorePagination = memo(() => {
  const [page, setPage] = React.useState(1);

  const { totalCount, currentPage } = useSelector(
    state => ({
      totalCount: state.more.totalCount,
      currentPage: state.more.currentPage
    }),
    shallowEqual
  );

  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  const dispatch = useDispatch();

  function handlePageChange(event, pageCount) {
    window.scrollTo(0, 0);
    dispatch(fetchMoreDataAction(pageCount - 1));
    setPage(pageCount);
  }

  return (
    <MorePaginationWrapper>
      <div className="pagination">
        <Pagination
          count={totalPage}
          page={page}
          size="large"
          onChange={handlePageChange}
        />
      </div>
    </MorePaginationWrapper>
  );
});
export default MorePagination;
