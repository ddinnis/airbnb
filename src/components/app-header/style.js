import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  font-weight: 600;

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 9999;
    border-bottom: 1px solid
      ${props => (props.isAlpha ? 'rgba(255,255,255,0)' : '#eee')};
    background-color: ${props =>
      props.isAlpha ? 'rgba(255,255,255,0)' : '#fff'};

    .top {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 80px;
      padding: 0 24px;
    }
  }

  .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .left {
    /* color: var(--primary-color); */
    color: ${props => props.theme.color.primaryColor};
    flex: 1;

    .logo {
      height: 80px;
      width: 102px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .center {
    display: flex;
    align-items: center;
    height: 48px;

    .search-bar {
      /* position: absolute;
      top: 0;
      left: 0; */

      width: 300px;
      height: 48px;

      display: flex;
      justify-content: space-between;

      cursor: pointer;
      padding: 0 8px;

      background-color: #fff;
      border: 1px solid #dddddd;
      border-radius: 40px;

      ${props => props.theme.mixin.boxShadow}

      .text {
        color: ${props => props.theme.text.primaryColor};
        font-weight: 600;
        line-height: 48px;
        padding: 0 16px;
      }
      .icon-search-bar {
        background-color: ${props => props.theme.color.primaryColor};
        color: #fff;
        margin: 7px 7px 7px 0;
        border-radius: 50%;

        height: 32px;
        width: 32px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    /*  搜索房源 搜索体验  */
    .search-detail {
      position: relative;
      transform-origin: 50% 0;
      will-change: transfrom, opacity;

      .search-tabs {
        height: 80px;

        display: flex;
        justify-content: center;
        align-items: center;

        min-width: 348px;
        padding: 0 24px;
        color: ${props => (props.isAlpha ? '#fff' : '#000')};

        .tab-item {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin: 16px;
          cursor: pointer;

          .title {
            font-size: 16px;
            line-height: 20px;
            font-weight: 400;
            padding-bottom: 5px;
          }

          .bottom-line {
            min-width: 64px;
            border-bottom: 3px solid rgba(255, 255, 255, 0);
          }

          &.active {
            transition: box-shadow 0.2s ease, transform 0.1s ease;
            border-bottom: 3px solid
              ${props => (props.isAlpha ? '#eee' : '#000')};
          }
        }
      }

      .search-info {
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);

        .section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;

          .divider {
            height: 30px;
            border-right: 1px solid #ddd;
          }

          &:hover {
            border-radius: 32px;
            background-color: #ddd;

            .divider {
              display: none;
            }
          }
        }

        .content {
          display: flex;
          flex: 1;
          width: 848px;
          height: 64px;
          border: 1px solid #ddd;
          border-radius: 32px;
          background-color: #fff;

          .item {
            cursor: pointer;

            display: flex;
            background-clip: padding-box;
            border: 1px solid transparent;
            border-radius: 32px;
            padding: 14px 32px;

            .title {
              font-size: 12px;
              line-height: 16px;
              font-weight: 800;
              letter-spacing: 0.04em;
            }
            .desc {
              font-size: 14px;
              line-height: 18px;
              color: #717171;
              font-weight: 400;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 100%;
            }
          }
        }
      }
    }
    /* 动画相关 */
    /* .search-detail-exit {
      transform: scale(1) translateY(0);
      opacity: 1;
    }

    .search-detail-exit-active {
      transition: all 250ms ease;
      transform: scale(0.35, 0.727273) translateY(-58px);
      opacity: 0;
    }

    .search-detail-enter {
      transform: scale(0.35, 0.727273) translateY(-58px);
      opacity: 0;
    }

    .search-detail-enter-active {
      transition: all 250ms ease;
      transform: scale(1) translateY(0);
      opacity: 1;
    }

    .search-bar-enter {
      transform: scale(2.85714, 1.375) translateY(58px);
      opacity: 0;
    }

    .search-bar-enter-active {
      transition: all 250ms ease;
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    .search-bar-exit {
      opacity: 0;
    } */
  }
  .right {
    flex: 1;
    color: ${props => props.theme.text.secondaryColor};
    display: flex;
    justify-content: flex-end;

    .btns {
      display: flex;
      justify-content: flex-end;

      margin-right: 8px;

      .btn {
        padding: 12px 15px;
        cursor: pointer;
        font-size: 14px;

        height: 18px;
        line-height: 18px;
        border-radius: 21px;
        color: ${props => (props.isAlpha ? '#fff' : '#000')};

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
    .profile > button {
      display: flex;
      justify-content: center;

      background-color: #fff;
      border: 1px solid #dddddd;
      border-radius: 21px;

      padding: 5px 5px 5px 12px;
      cursor: pointer;

      ${props => props.theme.mixin.boxShadow}
      .icon-menu {
        /* display: flex;
        align-items: center; */
        align-self: center;
      }
      .icon-avatar {
        margin-left: 12px;
        color: #717171;
      }
    }
    .profile {
      position: relative;
      .panel {
        position: absolute;
        top: 55px;
        right: 0;

        width: 240px;

        background-color: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.18);

        border-radius: 20px;

        .panel-top,
        .panel-bottom {
          padding: 10px 0;

          .item {
            height: 40px;
            line-height: 40px;

            padding: 0 16px;
            cursor: pointer;

            &:hover {
              background-color: #f7f7f7;
            }
          }
        }

        .panel-top {
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }
`;

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => (props.isSearch ? '100px' : '0')};
`;
