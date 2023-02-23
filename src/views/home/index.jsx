import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import HomeBanner from './c-cpns/home-banner';
import { HomeWrapper } from './style';

import { fetchHomeDataAction } from '@/store/modules/home';

import SectionHeader from '@/components/section-header';
import SectionRoom from '@/components/section-room';
import SectionFooter from '@/components/section-footer';
import HomeSectionTabs from './c-cpns/home-section-tabs';
import HomeSectionLongfor from './c-cpns/home-section-longfor';
import HomeSectionPlus from './c-cpns/home-section-plus';
import { changeHeaderConfigAction } from '@/store/modules/main';

const Home = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true }));
  }, [dispatch]);

  const {
    goodPriceInfo,
    highScoreInfo,
    homeDiscountInfo,
    hotRecommendInfo,
    longforInfo,
    homePlusInfo
  } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      homeDiscountInfo: state.home.homeDiscountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longforInfo: state.home.longforInfo,
      homePlusInfo: state.home.homePlusInfo
    }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          {/* 有值的时候渲染 */}
          {Object.keys(homeDiscountInfo).length && (
            <HomeSectionTabs infoData={homeDiscountInfo} />
          )}
        </div>
        <div className="recommend">
          {Object.keys(hotRecommendInfo).length && (
            <HomeSectionTabs infoData={hotRecommendInfo} />
          )}
        </div>
        <div className="longfor">
          {Object.keys(longforInfo).length && (
            <HomeSectionLongfor infoData={longforInfo} />
          )}
        </div>
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRoom roomList={goodPriceInfo.list} itemWidth={'25%'} />
          <SectionFooter />
        </div>
        <div className="high-score">
          <SectionHeader
            title={highScoreInfo.title}
            subTitle={highScoreInfo.subtitle}
          />
          <SectionRoom roomList={highScoreInfo.list} itemWidth={'25%'} />
          <SectionFooter />
        </div>
        <div className="homePlus">
          {Object.keys(homePlusInfo).length && (
            <HomeSectionPlus infoData={homePlusInfo} />
          )}
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
