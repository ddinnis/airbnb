import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  font-weight: 600;
  padding: 0 24px;
  border-bottom: 1px solid #eee;

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

    .search-bar {
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
