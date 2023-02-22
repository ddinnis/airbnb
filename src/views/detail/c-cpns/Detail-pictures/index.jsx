import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import PicBrowser from '@/components/pic-browser';
import { DetailPicturesWrapper } from './style';

const DetailPictures = memo(props => {
  const { detailPics } = props;
  const [showBro, setShowBro] = useState(false);

  const rightPics = detailPics.slice(1, 5);

  return (
    <DetailPicturesWrapper>
      <div className="pictures">
        <div className="left-pic">
          <div className="item" onClick={() => setShowBro(true)}>
            <img src={detailPics && detailPics[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right-pic">
          {rightPics.map((pic, i) => {
            return (
              <div className="item" key={i} onClick={() => setShowBro(true)}>
                <img src={pic} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="show-btn" onClick={() => setShowBro(true)}>
        show pics
      </div>
      {showBro && (
        <PicBrowser
          picUrls={detailPics}
          closeClick={() => {
            setShowBro(false);
          }}
        />
      )}
    </DetailPicturesWrapper>
  );
});

DetailPictures.propTypes = {
  detailPics: PropTypes.array
};

export default DetailPictures;
