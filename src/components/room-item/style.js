import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  color: ${props => props.theme.text.primaryColor};

  box-sizing: border-box;
  width: 25%;
  padding: 8px;

  font-weight: 700;

  /* 没有 img 的时候也可以撑起高度 高度为宽度的2/3 */
  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    border-radius: 3px;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
  }

  .name {
    font-size: 16px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    font-size: 14px;
    font-weight: 400;

    margin: 8px 0;
    line-height: 1.28571em;
  }

  .bottom-section {
    display: flex;
    align-items: center;

    font-size: 12px;
    font-weight: 600;

    margin-top: -5px;
    margin-right: -2px;

    .count {
      line-height: 22px;
      height: 22px;
      margin: 0px;
      margin-left: 2px;
    }

    .extra {
      line-height: 1.33333em;
    }
  }
`;
