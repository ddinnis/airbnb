import React, { memo } from "react";

import { MoreWrapper } from "./style";

const more = memo(() => {
  return (
    <MoreWrapper>
      <div className="filter">filter</div>
      <div className="rooms">rooms</div>
      <div className="pagination">pagination</div>
    </MoreWrapper>
  );
});

export default more;
