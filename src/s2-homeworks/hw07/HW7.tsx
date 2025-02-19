import React, { useState } from 'react';
import SuperSelect from './common/c5-SuperSelect/SuperSelect';
import SuperRadio from './common/c6-SuperRadio/SuperRadio';
import s2 from '../../s1-main/App.module.css';
import s from './HW7.module.css';

export type arrType = {
  id: number;
  value: string;
};
const arr: arrType[] = [
  { id: 1, value: 'BMW' },
  { id: 2, value: 'Audi' },
  { id: 3, value: 'Opel' },
];

const HW7 = () => {
  const [value, onChangeOption] = useState<number>(1); // селект и радио должны работать синхронно

  return (
    <div id={'hw7'}>
      <div className={s2.hwTitle}>Homework #7</div>
      <div className={s2.hw}>
        <div className={s.container}>
          <div>
            <SuperSelect
              id={'hw7-super-select'}
              options={arr}
              value={value}
              onChangeOption={onChangeOption}
            />
          </div>
          <div>
            <SuperRadio
              id={'hw7-super-radio'}
              name={'hw7-radio'}
              options={arr}
              value={value}
              onChangeOption={onChangeOption}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HW7;
