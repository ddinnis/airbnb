import React, { memo, useEffect, useState } from "react";

import { HeaderWrapper } from "./style";
import {
  IconLogo,
  IconGlobal,
  IconMenu,
  IconAvatar,
  IconSearchBar,
} from "@/assets/svg";

const AppHeader = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    function windowClick() {
      setShowPanel(false);
    }
    window.addEventListener("click", windowClick, true);

    return () => {
      window.addEventListener("click", windowClick);
    };
  }, []);

  function showPanelClick() {
    setShowPanel(true);
  }

  return (
    <HeaderWrapper>
      <div className="left">
        <div className="logo">
          <IconLogo />
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
