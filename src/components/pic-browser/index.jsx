import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { PicBrowserWrapper } from './style';
import {
  IconClose,
  IconArrowLeft,
  IconArrowRight,
  IconArrowBottom,
  IconArrowTop
} from '@/assets/svg/index';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Indicator from '@/components/indicator';
import classNames from 'classnames';

const PicBrowser = memo(props => {
  const { picUrls, closeClick } = props;
  const [curIndex, setCurIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [isShowList, setIsShowList] = useState(true);

  // 图片浏览器展示得时候，滚动功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  function handleCloseBtn() {
    if (closeClick) closeClick();
  }

  function handleBtnClick(isNext) {
    let newIndex = isNext ? curIndex + 1 : curIndex - 1;
    if (newIndex < 0) newIndex = picUrls.length - 1;
    if (newIndex > picUrls.length - 1) newIndex = 0;
    setCurIndex(newIndex);
    setIsNext(isNext);
  }

  function handleShowListToggle() {
    let showList = !isShowList;
    setIsShowList(showList);
  }

  const showList = () => {
    return (
      <div className="toggle-info">
        <span>隐藏照片列表</span>
        <IconArrowBottom />
      </div>
    );
  };

  const noShowList = () => {
    return (
      <div className="toggle-info">
        <span>显示照片列表</span>
        <IconArrowTop />
      </div>
    );
  };

  function handleImgItemClick(index) {
    setIsNext(index > curIndex);
    setCurIndex(index);
  }

  return (
    <PicBrowserWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={handleCloseBtn}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => handleBtnClick(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={() => handleBtnClick(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={picUrls[curIndex]}
              classNames="fade"
              timeout={150}
            >
              <img src={picUrls[curIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {curIndex + 1}/{picUrls.length}:
              </span>
              <span>room图片{curIndex + 1}</span>
            </div>
            <div className="toggle" onClick={handleShowListToggle}>
              {isShowList ? showList() : noShowList()}
            </div>
          </div>
          <div className="list" style={{ height: isShowList ? '67px' : '0px' }}>
            <Indicator selectIndex={curIndex}>
              {picUrls.map((item, index) => {
                return (
                  <div
                    className={classNames('item', {
                      active: index === curIndex
                    })}
                    onClick={e => handleImgItemClick(index)}
                    key={item}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PicBrowserWrapper>
  );
});

PicBrowser.propTypes = {
  picUrls: PropTypes.array
};

export default PicBrowser;
