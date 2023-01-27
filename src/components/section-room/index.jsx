import React, { memo } from "react";
import propTypes from "prop-types";

import RoomItem from "@/components/room-item";
import { SectionRoomWrapper } from "./style";

const SectionRoom = memo(props => {
  const { roomList = [], itemWidth } = props;
  return (
    <SectionRoomWrapper>
      <div className="room-list">
        {roomList?.slice(0, 8).map(item => {
          return (
            <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />
          );
        })}
      </div>
    </SectionRoomWrapper>
  );
});

SectionRoom.propTypes = {
  roomList: propTypes.array,
};

export default SectionRoom;
