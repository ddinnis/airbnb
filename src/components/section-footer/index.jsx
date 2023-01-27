import PropTypes from "prop-types";
import React, { memo } from "react";

import { SectionFooterWrapper } from "./style";
import { IconMoreArrow } from "@/assets/svg";

const SectionFooter = memo(props => {
  const { text = "显示全部", name } = props;
  return (
    <SectionFooterWrapper>
      <div className="section-footer">
        {name ? (
          <div className="name">{`查看更多${name}房源`}</div>
        ) : (
          <div className="text">{text}</div>
        )}
        <div className="icon">
          <IconMoreArrow />
        </div>
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};

export default SectionFooter;
