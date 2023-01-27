import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";

import { HomeSectionTabsWrapper } from "./style";

import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionTabs = memo(props => {
  const { infoData } = props;

  // 转换数据
  const tabNames = infoData?.dest_address?.map(item => item.name);
  const [name, setName] = useState(tabNames?.[0]);
  // const [name, setName] = useState(tabNames[0]);

  const tabClickHandle = useCallback(function (index, item) {
    setName(item);
  }, []);
  return (
    <HomeSectionTabsWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRoom roomList={infoData.dest_list?.[name]} itemWidth={"33.33%"} />
      <SectionFooter name={name} />
    </HomeSectionTabsWrapper>
  );
});

HomeSectionTabs.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionTabs;
