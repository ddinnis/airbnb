import PropTypes from "prop-types";
import React, { memo } from "react";

import { HomeSectionLongforWrapper } from "./style";

import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/components/scroll-view";

const HomeSectionLongfor = memo(props => {
  const { infoData } = props;

  return (
    <HomeSectionLongforWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map(item => {
            return <LongforItem itemData={item} />;
          })}
        </ScrollView>
      </div>
    </HomeSectionLongforWrapper>
  );
});

HomeSectionLongfor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionLongfor;
