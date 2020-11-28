import React from 'react';
import { Howl } from 'howler';

export default function WordBlock({ value }) {
  const sound = new Howl({
    src: [value.sound],
  });

  const playBtn = (
    <svg
      onClick={() => sound.play()}
      style={{ cursor: 'pointer' }}
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='play-circle'>
      <circle cx='12' cy='12' r='10' />
      <polygon points='10 8 16 12 10 16 10 8' />
    </svg>
  );
  return (
    <div className='WordBlock'>
      <div className='Wb-main'>
        <p className='Wb-title'>{value.sign}</p>
        <p className='Wb-subtitle'>Beiwort</p>
      </div>
      <div className='Wb-info'>
        <p className='thaiWord'>{value.word}</p>
        <p className='pronunciation'>{value.wordPronunciation}</p>
        <p className='translation'>{value.translation}</p>
      </div>
      {playBtn}
    </div>
  );
}
