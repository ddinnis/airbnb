import React, { memo, shallowEqual } from 'react';
import MoreRoomWrapper from './style';
import { useSelector } from 'react-redux';

import RoomItem from '@/components/room-item';

const MoreRoom = memo(props => {
  const { roomList, totalCount, isLoading } = useSelector(
    state => ({
      roomList: state.more.roomList,
      totalCount: state.more.totalCount,
      isLoading: state.more.isLoading
    }),
    shallowEqual
  );
  return (
    <MoreRoomWrapper>
      <div className="more-section">
        <div className="des">
          <img
            width="40"
            height="40"
            alt=""
            src="//z1.muscache.cn/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-suitcase.2b1ee4bba1967bb8827d8b3a6348489a.gif"
          />
          <div className="text1">马上就要出门旅行了？</div>
          <div className="text2">
            使用「闪订」筛选条件，查看可即时预订的房源。
          </div>
        </div>
        <h2 className="title">{totalCount}多处住宿</h2>
        <div className="room-list">
          {roomList.map(item => {
            return <RoomItem itemData={item} itemWidth="20%" key={item._id} />;
          })}
        </div>
      </div>
      {isLoading && <div className="cover"></div>}
    </MoreRoomWrapper>
  );
});

export default MoreRoom;
