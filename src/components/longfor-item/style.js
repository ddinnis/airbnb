import styled from "styled-components";

export const LongforItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;

  .inner {
    position: relative;
    padding: 6px;
    overflow: hidden;

    .cover {
      width: 100%;
      border-radius: 3px;
    }

    .bg-cover {
      border-radius: 3px;

      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 3%,
        rgb(0, 0, 0) 100%
      );
      opacity: 0.6;
      position: absolute;
      height: 60%;
      /* width: 100%; */
      left: 6px;
      right: 6px;
      bottom: 9px;
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0 32px 24px;

      color: rgb(255, 255, 255);
      text-align: center;

      .city {
        font-size: 18px;
        font-weight: 800;
        line-height: 1.44444em;
      }

      .price {
        font-size: 14px;
        font-weight: 600;
        line-height: 1.28571em;
      }
    }
  }
`;
