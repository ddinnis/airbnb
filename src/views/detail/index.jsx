import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import DetailInfo from './c-cpns/Detail-infos';
import DetailPictures from './c-cpns/Detail-pictures';

import { DetailWrapper } from './style';

const Detail = memo(() => {
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
