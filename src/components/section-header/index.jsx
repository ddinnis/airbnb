import React, { memo } from "react";
import PropTypes from "prop-types";

import { SectionHeaderWrapper } from "./style";
import { IconMoreArrow } from "@/assets/svg";

const SectionHeader = memo(props => {
  const { title = "default TITLE", subTitle = "default SUBTITLE" } = props;
  return (
    <SectionHeaderWrapper>
      <div className="section-header">
        <div className="hover-part">
          <section>
            <h2 className="title">{title}</h2>
            {subTitle && <div className="subTitle">{subTitle}</div>}
          </section>

          <div className="icon-more-arrow">
            <IconMoreArrow />
          </div>
        </div>
      </div>
    </SectionHeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
