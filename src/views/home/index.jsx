import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";

import { fetchHomeDataAction } from "@/store/modules/home";

import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";

import Button from "@mui/material/Button";

const Home = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  const { goodPriceInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader
            title={goodPriceInfo.title}
            subTitle={"来看看这些颇受房客好评的房源吧"}
          />
          <SectionRoom roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
