import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionPlusWrapper } from "./style";

import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";
import ScrollView from "@/components/scroll-view";

const HomeSectionPlus = memo(props => {
  const { infoData } = props;

  return (
    <HomeSectionPlusWrapper>
      <SectionHeader title={infoData.title} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map(item => {
            return <RoomItem itemData={item} key={item.id} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter />
    </HomeSectionPlusWrapper>
  );
});

HomeSectionPlus.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionPlus;
