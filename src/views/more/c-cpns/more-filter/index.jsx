import React, { memo, useState } from 'react';
import MoreFilterWrapper from './style';
import filterData from '@/assets/data/filter_data.json';
import classNames from 'classnames';

const MoreFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClick(item) {
    const newItems = [...selectItems];
    // 点击一次选中，再次点击取消选中
    if (newItems.includes(item)) {
      newItems.splice(newItems.indexOf(item), 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }

  return (
    <MoreFilterWrapper>
      {filterData.map((item, index) => {
        return (
          <div className="filter">
            <div
              className={classNames('item', {
                active: selectItems.includes(item)
              })}
              onClick={() => itemClick(item)}
              key={item}
            >
              {item}
            </div>
          </div>
        );
      })}
    </MoreFilterWrapper>
  );
});
export default MoreFilter;
