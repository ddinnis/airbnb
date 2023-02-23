import React, { memo, useEffect, useState } from 'react';

import { HeaderWrapper } from './style';
import {
  IconLogo,
  IconGlobal,
  IconMenu,
  IconAvatar,
  IconSearchBar
} from '@/assets/svg';
import { useNavigate } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import classNames from 'classnames';

const AppHeader = memo(() => {
  const [showPanel, setShowPanel] = useState(false);
  const navigate = useNavigate();

  const { headerConfig } = useSelector(
    state => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqual
  );

  const { isFixed } = headerConfig;
  console.log('isFixed', isFixed);
  useEffect(() => {
    function windowClick() {
      setShowPanel(false);
    }
    window.addEventListener('click', windowClick, true);

    return () => {
      window.addEventListener('click', windowClick);
    };
  }, []);

  function showPanelClick() {
    setShowPanel(true);
  }

  function handleLogoClick() {
    console.log('home');
    navigate('/home');
  }

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="left">
        <div className="logo-section">
          <div className="logo" onClick={() => handleLogoClick()}>
            <IconLogo />
          </div>
        </div>
      </div>
      <div className="center">
        <button className="search-bar">
          <div className="text">搜索房源和体验</div>
          <div className="icon-search-bar">
            <IconSearchBar />
          </div>
        </button>
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
    </HeaderWrapper>
  );
});

export default AppHeader;
