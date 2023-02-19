import styled from 'styled-components';

const MorePaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* button {
    background-color: rgb(34, 34, 34);
  } */

  .pagination {
    margin-bottom: 20px;
  }

  .MuPaginationItem-icon {
    font-size: 20px;
  }
  .MuPaginationItem-page {
    margin: 0 9px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default MorePaginationWrapper;
