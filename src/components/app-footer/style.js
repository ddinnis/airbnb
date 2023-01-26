import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;
  width: 1048px;
  color: #767676;

  margin: 0 auto;
  .top {
    display: flex;

    .item {
      padding: 48px 24px;
      flex: 1;

      font-size: 14px;
      font-weight: 800;
      line-height: 1.28571em;
      color: rgb(72, 72, 72);

      .info-title {
        margin-bottom: 16px;
      }

      .list-item {
        margin-bottom: 4px;
        color: #767676;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    .bottom-right {
      display: flex;
      align-items: center;

      .logo {
        margin-right: 8px;
      }
    }
  }
`;
