import React from 'react';
import { Howl } from 'howler';
import Sound from '../sounds/consonants/ก.mp3';

export default function WordBlock({ consonant }) {
  const sound = new Howl({
    src: [consonant.sound],
  });

  const playBtn = (
    <svg
      onClick={() => sound.play()}
      style={{ cursor: 'pointer' }}
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#3b12e0'
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
        <p className='Wb-title'>{consonant.consonant}</p>
        <p className='Wb-subtitle'>Beiwort</p>
      </div>
      <div className='Wb-info'>
        <p className='thaiWord'>{consonant.word}</p>
        <p className='pronunciation'>{consonant.wordPronunciation}</p>
        <p className='translation'>{consonant.translation}</p>
      </div>
      {playBtn}
    </div>
  );
}
