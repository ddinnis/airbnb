import React, { memo, useState } from "react";
import { PropTypes } from "prop-types";
import className from "classnames";

import { SectionTabsWrapper } from "./style";
import ScrollView from "../scroll-view";

const SectionTabs = memo(props => {
  const { tabNames, tabClick } = props;
  const [currIndex, setCurrIndex] = useState(0);

  function tabIndexClick(index, item) {
    setCurrIndex(index);
    tabClick(index, item);
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabNames?.map((item, index) => {
          return (
            <div
              className={className("tab", { active: index === currIndex })}
              key={index}
              onClick={() => tabIndexClick(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
