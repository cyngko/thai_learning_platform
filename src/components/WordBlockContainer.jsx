import React from 'react';
import WordBlock from './WordBlock';

export default function WordBlockContainer({ data, title, sub }) {
  return (
    <div className='WordBlockContainer'>
      <h2 className='blockTitle'>{title}</h2>
      <div className='WordBlockWrapper'>
        {data.map((c) => (
          <WordBlock value={c} key={c.id} subTitle={sub} />
        ))}
      </div>
    </div>
  );
}
