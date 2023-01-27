import PropTypes from "prop-types";
import React, { memo, useState, useRef, useEffect } from "react";

import { ScrollViewWrapper } from "./style";
import { IconArrowRight, IconArrowLeft } from "@/assets/svg";

const ScrollView = memo(props => {
  const [showRight, setShowRight] = useState(false);
  const [positionIndex, setPositionIndex] = useState(0);
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

  function rightClickHandle() {
    const newIndex = positionIndex + 1;
    const newEl = scrollContentRef.current.children[newIndex];
    // 可以拿到 item 到左边的距离 offsetLeft 是相当于parent Element的距离
    const newOffsetLeft = newEl.offsetLeft;

    // 直接传到内部
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPositionIndex(newIndex);
    console.log(newOffsetLeft, "newOffsetLeft");
    //判断是否显示右边按钮
    if (totalDistanceRef.current > newOffsetLeft) {
      setShowRight(false);
    }
  }

  return (
    <ScrollViewWrapper>
      <div className="btns">
        <button className="btn">
          <IconArrowLeft />
        </button>
        {showRight && (
          <button className="btn" onClick={rightClickHandle}>
            <IconArrowRight />
          </button>
        )}
      </div>

      <div className="scroll-content" ref={scrollContentRef}>
        {props.children}
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
