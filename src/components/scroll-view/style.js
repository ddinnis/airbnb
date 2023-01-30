import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
  font-weight: bold;

  .content {
    overflow: hidden;
    .scroll {
      display: flex;
      width: 100%;
      transition: transform 250ms ease;
    }
  }
  .btns {
    .btn-bg {
      /* width: 28px;
      height: 48px;
      background: linear-gradient(
        90deg,
        rgb(255, 255, 255) 0%,
        rgb(255, 255, 255) 17%,
        rgba(255, 255, 255, 0) 100%
      ); */
      .btn {
        position: absolute;

        background-color: #fff;

        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid #ffffff;

        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: rgb(0 0 0 / 14%) 0px 1px 1px 1px;

        cursor: pointer;
        z-index: 12;

        &.left {
          left: 0;
          top: 50%;
          transform: translate(0, -50%);
          margin-left: -13px;
        }

        &.right {
          right: 0;
          top: 50%;
          transform: translate(0, -50%);
          margin-right: -13px;
        }
      }
    }
  }
`;
