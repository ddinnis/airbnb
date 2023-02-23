import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import DetailInfo from './c-cpns/Detail-infos';
import DetailPictures from './c-cpns/Detail-pictures';
import { changeHeaderConfigAction } from '@/store/modules/main';

import { DetailWrapper } from './style';

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }));
  }, [dispatch]);

  const { detailInfo } = useSelector(
    state => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  );

  const { picture_urls } = detailInfo;
  return (
    <DetailWrapper>
      <DetailInfo detailInfo={detailInfo} />
      <DetailPictures detailPics={picture_urls} />
    </DetailWrapper>
  );
});

export default Detail;
