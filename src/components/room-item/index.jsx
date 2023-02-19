import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { RoomItemWrapper } from './style';

import { Rating } from '@mui/material';

const RoomItem = memo(props => {
  const { itemData, itemWidth = '25%' } = props;
  const color = itemData.verify_info.text_color;

  return (
    <RoomItemWrapper itemWidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc" style={{ color }}>
          {itemData.verify_info.messages.join(' · ')}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/晚</div>
        <div className="bottom-section">
          <Rating
            precision={0.5}
            name="read-only"
            value={itemData.star_rating ?? 5}
            readOnly
            sx={{ fontSize: '12px', color: '#00848a' }}
          />
          <span className="count">{itemData.reviews_count}</span>

          {itemData?.bottom_info?.content && (
            <span>
              <span> · </span>
              <span className="extra">{itemData?.bottom_info?.content}</span>
            </span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
};
export default RoomItem;
