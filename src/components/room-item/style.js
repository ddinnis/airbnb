import styled from 'styled-components';

export const RoomItemWrapper = styled.div`
  color: ${props => props.theme.text.primaryColor};
  width: ${props => props.itemWidth};

  box-sizing: border-box;
  padding: 8px;

  font-weight: 700;

  flex-shrink: 0;

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
      object-fit: cover;
    }
  }

  .swiper {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .indicator {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 1;
      bottom: 10px;
      width: 30%;
      margin: 0 auto;

      .dot-section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
          margin-right: 5px;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }

    .control {
      position: absolute;
      z-index: 999;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      justify-content: space-between;
      align-items: center;
      display: none;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        &.left {
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
        &.right {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
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
