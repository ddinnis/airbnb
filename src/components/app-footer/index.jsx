import React, { memo } from "react";

import FooterData from "./data/footer-data.json";
import { FooterWrapper } from "./style";
import { IconFooterLogo, IconWB } from "@/assets/svg";

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="top">
        {FooterData.map(item => {
          return (
            <div className="item" key={item.name}>
              <div className="info-title">{item.name}</div>
              {item.list.map(value => {
                return (
                  <div className="list-item" key={value}>
                    {value}
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="presentation"></div>
        <div className="detail"></div>
      </div>
      <div className="bottom">
        <div className="bottom-right">
          <div className="logo">
            <IconFooterLogo />
          </div>
          <span>© 2023 Airbnb, Inc. All rights reserved.</span>
        </div>
        <div className="bottom-left">
          <IconWB />
        </div>
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;
