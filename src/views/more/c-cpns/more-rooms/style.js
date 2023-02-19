import styled from 'styled-components';

const MoreRoomWrapper = styled.div`
  position: relative;
  padding: 24px;
  .more-section {
    .des {
      display: flex;
      font-size: 14px;
      .text1,
      .text2 {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .text1 {
        font-weight: 800;
        margin-left: 12px;
      }
    }
    .room-list {
      display: flex;
      flex-wrap: wrap;
    }
  }
  > .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export default MoreRoomWrapper;
