import PropTypes from "prop-types";
import React, { memo, useState, useRef, useEffect } from "react";

import { ScrollViewWrapper } from "./style";
import { IconArrowRight, IconArrowLeft } from "@/assets/svg";

const ScrollView = memo(props => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const positionIndexRef = useRef(0);
  // positionIndexRef.current = 0;
  // const [positionIndex, setPositionIndex] = useState(0);
  const totalDistanceRef = useRef(); // 保存一个数据，可以保存不变

  /**  组件渲染完成，判断是否显示右侧的按钮 */
  const scrollContentRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;

    totalDistanceRef.current = totalDistance;

    setShowRight(totalDistance > 0);
  }, [props.children]);

  function controlBtnClick(isRight) {
    const newIndex = isRight
      ? positionIndexRef.current + 1
      : positionIndexRef.current - 1;

    positionIndexRef.current = newIndex;

    const newEl = scrollContentRef.current.children[positionIndexRef.current];
    // 可以拿到 item 到左边的距离 offsetLeft 是相当于parent Element的距离
    const newOffsetLeft = newEl.offsetLeft;

    // 直接传到内部
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    // setPositionIndex(newIndex);

    //判断是否显示按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  }

  return (
    <ScrollViewWrapper>
      <div className="btns">
        {showLeft && (
          <div className="btn-bg">
            <button className="btn left" onClick={() => controlBtnClick(false)}>
              <IconArrowLeft />
            </button>
          </div>
        )}
        {showRight && (
          <div className="btn-bg">
            <button className="btn right" onClick={() => controlBtnClick(true)}>
              <IconArrowRight />
            </button>
          </div>
        )}
      </div>
      <div className="content">
        <div className="scroll" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
