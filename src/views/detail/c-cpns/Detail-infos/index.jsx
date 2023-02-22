import PropTypes from 'prop-types';
import React, { memo } from 'react';

const DetailInfo = memo(props => {
  const { detailInfo } = props;
  return <div>{detailInfo.name}</div>;
});

DetailInfo.propTypes = {
  detailInfo: PropTypes.object
};

export default DetailInfo;
