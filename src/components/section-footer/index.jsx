import PropTypes from "prop-types";
import React, { memo } from "react";

import { SectionFooterWrapper } from "./style";
import { IconMoreArrow } from "@/assets/svg";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo(props => {
  const { text = "显示全部", name } = props;

  const navigate = useNavigate();
  function moreClickHandle() {
    navigate("/more");
  }

  return (
    <SectionFooterWrapper>
      <div className="section-footer" onClick={moreClickHandle}>
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
