import React, { memo, shallowEqual, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import MoreRoomWrapper from './style';
import RoomItem from '@/components/room-item';
import { changeDetailInfoAction } from '@/store/modules/detail';

const MoreRoom = memo(props => {
  const { roomList, totalCount, isLoading } = useSelector(
    state => ({
      roomList: state.more.roomList,
      totalCount: state.more.totalCount,
      isLoading: state.more.isLoading
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRoomItemClick = useCallback(
    itemData => {
      dispatch(changeDetailInfoAction(itemData));
      navigate('/detail');
    },
    [navigate, dispatch]
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
          {roomList?.map(item => {
            return (
              <RoomItem
                roomItemClick={() => handleRoomItemClick(item)}
                itemData={item}
                itemWidth="20%"
                key={item._id}
              />
            );
          })}
        </div>
      </div>
      {isLoading && <div className="cover"></div>}
    </MoreRoomWrapper>
  );
});

export default MoreRoom;
