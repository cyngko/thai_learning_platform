import React from 'react';
import WordBlock from './WordBlock';
import Sound_ก from '../sounds/consonants/ก.mp3';
import Sound_ข from '../sounds/consonants/ข.mp3';
import Sound_ฃ from '../sounds/consonants/ฃ.mp3';
import Sound_ค from '../sounds/consonants/ค.mp3';
import Sound_ฅ from '../sounds/consonants/ฅ.mp3';
import Sound_ฆ from '../sounds/consonants/ฆ.mp3';
import Sound_ง from '../sounds/consonants/ง.mp3';
import Sound_จ from '../sounds/consonants/จ.mp3';
import Sound_ฉ from '../sounds/consonants/ฉ.mp3';
import Sound_ช from '../sounds/consonants/ช.mp3';
import Sound_ซ from '../sounds/consonants/ซ.mp3';
import Sound_ฌ from '../sounds/consonants/ฌ.mp3';
import Sound_ญ from '../sounds/consonants/ญ.mp3';
import Sound_ฎ from '../sounds/consonants/ฎ.mp3';
import Sound_ฏ from '../sounds/consonants/ฏ.mp3';
import Sound_ฐ from '../sounds/consonants/ฐ.mp3';
import Sound_ฑ from '../sounds/consonants/ฑ.mp3';
import Sound_ฒ from '../sounds/consonants/ฒ.mp3';
import Sound_ณ from '../sounds/consonants/ณ.mp3';
import Sound_ด from '../sounds/consonants/ด.mp3';
import Sound_ต from '../sounds/consonants/ต.mp3';
import Sound_ถ from '../sounds/consonants/ถ.mp3';
import Sound_ท from '../sounds/consonants/ท.mp3';
import Sound_ธ from '../sounds/consonants/ธ.mp3';
import Sound_น from '../sounds/consonants/น.mp3';
import Sound_บ from '../sounds/consonants/บ.mp3';
import Sound_ป from '../sounds/consonants/ป.mp3';
import Sound_ผ from '../sounds/consonants/ผ.mp3';
import Sound_ฝ from '../sounds/consonants/ฝ.mp3';
import Sound_พ from '../sounds/consonants/พ.mp3';
import Sound_ฟ from '../sounds/consonants/ฟ.mp3';
import Sound_ภ from '../sounds/consonants/ภ.mp3';
import Sound_ม from '../sounds/consonants/ม.mp3';
import Sound_ย from '../sounds/consonants/ย.mp3';
import Sound_ร from '../sounds/consonants/ร.mp3';
import Sound_ล from '../sounds/consonants/ล.mp3';
import Sound_ว from '../sounds/consonants/ว.mp3';
import Sound_ศ from '../sounds/consonants/ศ.mp3';
import Sound_ษ from '../sounds/consonants/ษ.mp3';
import Sound_ส from '../sounds/consonants/ส.mp3';
import Sound_ห from '../sounds/consonants/ห.mp3';
import Sound_ฬ from '../sounds/consonants/ฬ.mp3';
import Sound_อ from '../sounds/consonants/อ.mp3';
import Sound_ฮ from '../sounds/consonants/ฮ.mp3';

export default function WordBlockContainer() {
  const consonants = [
    {
      consonant: 'ก',
      wordPronunciation: 'gô:- gai',
      word: 'ก ไก่',
      translation: 'Hähnchen',
      sound: Sound_ก,
      id: 1,
    },
    {
      consonant: 'ข',
      wordPronunciation: 'khô: khai',
      word: 'ข ไข่',
      translation: 'Ei',
      sound: Sound_ข,
      id: 2,
    },
    {
      consonant: 'ฃ',
      wordPronunciation: 'khô: khu:at',
      word: 'ฃ ขวด',
      translation: 'Flasche [obsolet]',
      sound: Sound_ฃ,
      id: 3,
    },
    {
      consonant: 'ค',
      wordPronunciation: 'khô: khwa:i',
      word: 'ค ควาย',
      translation: 'Büffel',
      sound: Sound_ค,
      id: 4,
    },
    {
      consonant: 'ฅ',
      wordPronunciation: 'khô: khon',
      word: 'ฅ คน',
      translation: 'Person [obsolet]',
      sound: Sound_ฅ,
      id: 5,
    },
    {
      consonant: 'ฆ',
      wordPronunciation: 'khô: ra khang',
      word: 'ฆ ระฆัง',
      translation: 'Glocke',
      sound: Sound_ฆ,
      id: 6,
    },
    {
      consonant: 'ง',
      wordPronunciation: 'ngô: ngu:',
      word: 'ง งู',
      translation: 'Schlange',
      sound: Sound_ง,
      id: 7,
    },
    {
      consonant: 'จ',
      wordPronunciation: 'djô: dja:n',
      word: 'จ จาน',
      translation: 'Teller',
      sound: Sound_จ,
      id: 8,
    },
    {
      consonant: 'ฉ',
      wordPronunciation: 'tschô: tsching',
      word: 'ฉ ฉิ่ง',
      translation: 'Becken',
      sound: Sound_ฉ,
      id: 9,
    },
    {
      consonant: 'ช',
      wordPronunciation: 'tschô: tscha:ng',
      word: 'ช ช้าง',
      translation: 'Elefant',
      sound: Sound_ช,
      id: 10,
    },
    {
      consonant: 'ซ',
      wordPronunciation: 'sô: so:',
      word: 'ซ โซ่',
      translation: 'Kette',
      sound: Sound_ซ,
      id: 11,
    },
    {
      consonant: 'ฌ',
      wordPronunciation: 'tschô: tschö:',
      word: 'ฌ เฌอ',
      translation: 'Busch; Baum',
      sound: Sound_ฌ,
      id: 12,
    },
    {
      consonant: 'ญ',
      wordPronunciation: 'jô: jing',
      word: 'ญ หญิง',
      translation: 'weiblich; Frau',
      sound: Sound_ญ,
      id: 13,
    },
    {
      consonant: 'ฎ',
      wordPronunciation: 'dô: tscha da:',
      word: 'ฎ ชฎา',
      translation: 'Krone; Kopfschmuck',
      sound: Sound_ฎ,
      id: 14,
    },
    {
      consonant: 'ฏ',
      wordPronunciation: 'tô: pa tak',
      word: 'ฏ ปฏัก',
      translation: 'Spieße; Speer',
      sound: Sound_ฏ,
      id: 15,
    },
    {
      consonant: 'ฐ',
      wordPronunciation: 'thô: tha:n',
      word: 'ฐ ฐาน',
      translation: 'Basis; Sockel',
      sound: Sound_ฐ,
      id: 16,
    },
    {
      consonant: 'ฑ',
      wordPronunciation: 'thô: mon tho:',
      word: 'ฑ มณโฑ',
      translation: 'weiblicher Eigenname',
      sound: Sound_ฑ,
      id: 17,
    },
    {
      consonant: 'ฒ',
      wordPronunciation: 'thô: phu: thau',
      word: 'ฒ ผู้เฒ่า',
      translation: 'Greis',
      sound: Sound_ฒ,
      id: 18,
    },
    {
      consonant: 'ณ',
      wordPronunciation: 'tnô: ne:n',
      word: 'ณ เณร',
      translation: 'Novize, Neuling',
      sound: Sound_ณ,
      id: 19,
    },
    {
      consonant: 'ด',
      wordPronunciation: 'dô: dek',
      word: 'ด เด็ก',
      translation: 'Kind',
      sound: Sound_ด,
      id: 20,
    },
    {
      consonant: 'ต',
      wordPronunciation: 'tô: tau',
      word: 'ต เต่า',
      translation: 'Schildkröte',
      sound: Sound_ต,
      id: 21,
    },
    {
      consonant: 'ถ',
      wordPronunciation: 'thô: thung',
      word: 'ถ ถุง',
      translation: 'Tasche',
      sound: Sound_ถ,
      id: 22,
    },
    {
      consonant: 'ท',
      wordPronunciation: 'thô: tha ha:n',
      word: 'ท ทหาร',
      translation: 'Soldat',
      sound: Sound_ท,
      id: 23,
    },
    {
      consonant: 'ธ',
      wordPronunciation: 'thô: thong',
      word: 'ธ ธง',
      translation: 'Flagge',
      sound: Sound_ธ,
      id: 24,
    },
    {
      consonant: 'น',
      wordPronunciation: 'nô: nu:',
      word: 'น หนู',
      translation: 'Maus; Ratte',
      sound: Sound_น,
      id: 25,
    },
    {
      consonant: 'บ',
      wordPronunciation: 'bô: bai mai',
      word: 'บ ใบไม้',
      translation: 'Blatt; Laub',
      sound: Sound_บ,
      id: 26,
    },
    {
      consonant: 'ป',
      wordPronunciation: 'pô: pla:',
      word: 'ป ปลา',
      translation: 'Fisch',
      sound: Sound_ป,
      id: 27,
    },
    {
      consonant: 'ผ',
      wordPronunciation: 'phô: phüng',
      word: 'ผ ผึ้ง',
      translation: 'Biene',
      sound: Sound_ผ,
      id: 28,
    },
    {
      consonant: 'ฝ',
      wordPronunciation: 'fô: fa:',
      word: 'ฝ ฝา',
      translation: 'Deckel',
      sound: Sound_ฝ,
      id: 29,
    },
    {
      consonant: 'พ',
      wordPronunciation: 'phô: pha:n',
      word: 'พ พาน',
      translation: 'Tablett',
      sound: Sound_พ,
      id: 30,
    },
    {
      consonant: 'ฟ',
      wordPronunciation: 'fô: fan',
      word: 'ฟ ฟัน',
      translation: 'Zahn',
      sound: Sound_ฟ,
      id: 31,
    },
    {
      consonant: 'ภ',
      wordPronunciation: 'phô: sam phau',
      word: 'ภ สําเภา',
      translation: 'Sektion, Abschnitt',
      sound: Sound_ภ,
      id: 32,
    },
    {
      consonant: 'ม',
      wordPronunciation: 'mô: ma:',
      word: 'ม ม้า',
      translation: 'Pferd',
      sound: Sound_ม,
      id: 33,
    },
    {
      consonant: 'ย',
      wordPronunciation: 'jô: jak',
      word: 'ย ยักษ์',
      translation: 'Riese',
      sound: Sound_ย,
      id: 34,
    },
    {
      consonant: 'ร',
      wordPronunciation: 'rô: rü:a',
      word: 'ร เรือ',
      translation: 'Schiff; Boot',
      sound: Sound_ร,
      id: 35,
    },
    {
      consonant: 'ล',
      wordPronunciation: 'lô: ling',
      word: 'ล ลิง',
      translation: 'Affe',
      sound: Sound_ล,
      id: 36,
    },
    {
      consonant: 'ว',
      wordPronunciation: 'wô: wä:n',
      word: 'ว เเหวน',
      translation: 'Ring',
      sound: Sound_ว,
      id: 37,
    },
    {
      consonant: 'ศ',
      wordPronunciation: 'sô: sa:la:',
      word: 'ศ ศาลา',
      translation: 'Pavillon',
      sound: Sound_ศ,
      id: 38,
    },
    {
      consonant: 'ษ',
      wordPronunciation: 'sô: rü:si:',
      word: 'ษ ฤาษี',
      translation: 'Einsiedler',
      sound: Sound_ษ,
      id: 39,
    },
    {
      consonant: 'ส',
      wordPronunciation: 'sô: sü:a',
      word: 'ส เสือ',
      translation: 'Tiger',
      sound: Sound_ส,
      id: 40,
    },
    {
      consonant: 'ห',
      wordPronunciation: 'hô: hi:p',
      word: 'ห หีบ',
      translation: 'Truhe; Kiste',
      sound: Sound_ห,
      id: 41,
    },
    {
      consonant: 'ฬ',
      wordPronunciation: 'lô: dju la:',
      word: 'ฬ จุฬา',
      translation: 'Drachen',
      sound: Sound_ฬ,
      id: 42,
    },
    {
      consonant: 'อ',
      wordPronunciation: 'ô: a:ng',
      word: 'อ อ่าง',
      translation: 'Waschbecken; Spüle',
      sound: Sound_อ,
      id: 43,
    },
    {
      consonant: 'ฮ',
      wordPronunciation: 'hô: nok hu:g',
      word: 'ฮ นกฮูก',
      translation: 'Eule',
      sound: Sound_ฮ,
      id: 44,
    },
  ];
  return (
    <div className='WordBlockContainer'>
      <h2 className='blockTitle'>Consonants (พยัญชนะ)</h2>
      <div className='WordBlockWrapper'>
        {consonants.map((c) => (
          <WordBlock consonant={c} />
        ))}
      </div>
    </div>
  );
}
