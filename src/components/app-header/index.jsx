import React, { memo, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import classNames from 'classnames';

import { HeaderWrapper, SearchAreaWrapper } from './style';
import {
  IconLogo,
  IconGlobal,
  IconMenu,
  IconAvatar,
  IconSearchBar
} from '@/assets/svg';
import SearchTitles from '@/assets/data/search_titles.json';
import useScrollPosition from '../../hooks/useScrollPosition';

const AppHeader = memo(() => {
  const [showPanel, setShowPanel] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  // 是否为搜索状态
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();

  const { headerConfig } = useSelector(
    state => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqual
  );
  const { isFixed, topAlpha } = headerConfig;

  useEffect(() => {
    function windowClick() {
      setShowPanel(false);
    }
    window.addEventListener('click', windowClick, true);

    return () => {
      window.addEventListener('click', windowClick);
    };
  }, []);

  // 监听滚动
  const { scrollY } = useScrollPosition();
  const prevY = useRef();
  if (!isSearch) prevY.current = scrollY;
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  // 首页顶部透明度逻辑
  let isAlpha = topAlpha && scrollY === 0;

  function showPanelClick() {
    setShowPanel(true);
  }

  function handleLogoClick() {
    console.log('home');
    navigate('/home');
  }

  function handleTabItemClick(index) {
    setTabIndex(index);
  }

  const defaultHeader = () => {
    return (
      <button className="search-bar" onClick={() => setIsSearch(true)}>
        <div className="text">搜索房源和体验</div>
        <div className="icon-search-bar">
          <IconSearchBar />
        </div>
      </button>
    );
  };

  const searchHeader = () => {
    return (
      <div className="search-detail">
        <div className="search-tabs">
          {SearchTitles.map((item, index) => {
            return (
              <span
                className={classNames('tab-item', {
                  active: tabIndex === index
                })}
                key={index}
                onClick={() => handleTabItemClick(index)}
              >
                <div className="title">{item.title}</div>
                <span className="bottom-line"></span>
              </span>
            );
          })}
        </div>
        <div className="search-info">
          <div className="content">
            {SearchTitles[tabIndex].searchInfos.map((item, index) => {
              return (
                <div className="section" key={index}>
                  <div className="item">
                    <div className="info">
                      <div className="title">{item.title}</div>
                      <div className="desc">{item.desc}</div>
                    </div>
                  </div>
                  {index !== SearchTitles[tabIndex].searchInfos.length - 1 && (
                    <div className="divider"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <HeaderWrapper isAlpha={isAlpha} className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <div className="left">
            <div className="logo-section">
              <div className="logo" onClick={() => handleLogoClick()}>
                <IconLogo />
              </div>
            </div>
          </div>
          <div className="center">
            {/* 搜索状态 ? 默认状态 : 搜索房源 搜索体验 */}
            {!isSearch ? defaultHeader() : searchHeader()}
          </div>
          <div className="right">
            <div className="btns">
              <div className="btn">登录</div>
              <div className="btn">注册</div>
              <div className="btn">
                <IconGlobal />
              </div>
            </div>
            <div className="profile" onClick={() => showPanelClick()}>
              <button>
                <div className="icon-menu">
                  <IconMenu />
                </div>
                <div className="icon-avatar">
                  <IconAvatar />
                </div>
              </button>
              {showPanel && (
                <div className="panel">
                  <div className="panel-top">
                    <div className="item register">注册</div>
                    <div className="item login">登录</div>
                  </div>
                  <div className="panel-bottom">
                    <div className="item rent">出租房源</div>
                    <div className="item experience">开展体验</div>
                    <div className="item help">帮助</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <SearchAreaWrapper
          className="search-area"
          isSearch={isSearch}
        ></SearchAreaWrapper>
      </div>
      {isSearch && (
        <div className="cover" onClick={() => setIsSearch(false)}></div>
      )}
    </HeaderWrapper>
  );
});

export default AppHeader;
