import styled from 'styled-components';

export const DetailPicturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @keyframes scaleAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1.3);
    }
  }

  > .pictures {
    width: 100%;
    height: 45vh;
    display: flex;

    &:hover {
      .cover {
        opacity: 1 !important;
        transition: opacity 2s ease 0s;
      }

      .item:hover {
        img {
          /* animation-name: 'scaleAnimation'; */
          /* zoom: 1; */
          /* transition: opacity 2s ease 0s; */
          transition: all 1s ease 0s;
          transform: scale(1.2);
        }
        .cover {
          opacity: 0 !important;
          transition: opacity 2s ease 0s;
        }
      }
    }

    .left-pic,
    .right-pic {
      width: 50%;
      height: 100%;

      .item {
        position: relative;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        border: 1px solid #000;
        box-sizing: border-box;

        /* padding: 66.66% 0 0; */

        img {
          width: 100%;
          height: 100%;

          position: relative;
          object-fit: cover;
        }
        .cover {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 9;
        }
      }
    }
    .right-pic {
      width: 50%;
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 50%;
        object-fit: cover;
        /* border: 1px solid black; */
        /* border: 1px solid black;
        position: relative;
        padding: 30.6% 0 0;
        border: 1px solid black; */

        /* border-radius: 3px; */

        /* img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        } */
      }
    }
  }

  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`;
