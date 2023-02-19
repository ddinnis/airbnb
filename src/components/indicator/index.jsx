import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef } from 'react';
import { IndicatorWrapper } from './style';

const Indicator = memo(props => {
  const { selectIndex = 0 } = props;
  const listRef = useRef();

  useEffect(() => {
    const selectItemEl = listRef.current.children[selectIndex];
    // 拿offsetLeft 需要一个定位元素
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    // 内容的宽度
    const contentWidth = listRef.current.clientWidth;
    const contentScroll = listRef.current.scrollWidth;

    // selectIndex 需要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;

    // 左边特殊处理
    if (distance < 0) distance = 0;
    const totalDistance = contentScroll - contentWidth;
    // 右边特殊处理
    if (distance > totalDistance) distance = totalDistance;

    listRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="list" ref={listRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number
};

export default Indicator;
