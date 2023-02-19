import React, { memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { RoomItemWrapper } from './style';

import { Rating } from '@mui/material';
import { Carousel } from 'antd';
import { IconArrowLeft, IconArrowRight } from '@/assets/svg';
import Indicator from '../indicator';
import classNames from 'classnames';

const RoomItem = memo(props => {
  const { itemData, itemWidth = '25%', roomItemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);

  const carouselRef = useRef();
  const color = itemData.verify_info.text_color;

  function handleArrowClick(isRightClick = true) {
    isRightClick ? carouselRef.current.next() : carouselRef.current.prev();

    let newIndex = isRightClick ? selectIndex + 1 : selectIndex - 1;

    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;

    setSelectIndex(newIndex);
  }

  function handleRoomItemClick() {
    // 由 props 来判断是否跳转到 detail 页面
    if (roomItemClick) roomItemClick(itemData);
  }

  const picElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const swiperElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={() => handleArrowClick(false)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={() => handleArrowClick()}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="dot-section" key={item}>
                <span
                  className={classNames('dot', {
                    active: selectIndex === index
                  })}
                  key={index}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={carouselRef}>
        {itemData?.picture_urls?.map(item => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <RoomItemWrapper itemWidth={itemWidth} onClick={handleRoomItemClick}>
      <div className="inner">
        {!itemData.picture_urls ? picElement : swiperElement}
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
