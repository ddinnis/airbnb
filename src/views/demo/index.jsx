import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';

import Indicator from '@/components/indicator';
import { DemoWrapper } from './style';

const DEMO = memo(props => {
  const list = ['one', 'two', 'three', 'four', 'five', 'six'];
  const [selectIndex, setSelectIndex] = useState(0);

  function handleToggleClick(isNext) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    // edge case
    if (newIndex < 0) newIndex = list.length - 1;
    if (newIndex > list.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button
          onClick={() => {
            handleToggleClick(false);
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            handleToggleClick(true);
          }}
        >
          next
        </button>
      </div>
      <Indicator selectIndex={selectIndex}>
        {list.map(item => {
          return <button key={item}>{item}</button>;
        })}
      </Indicator>
    </DemoWrapper>
  );
});

DEMO.propTypes = {};

export default DEMO;
