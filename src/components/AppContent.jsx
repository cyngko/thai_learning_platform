import React from 'react';
import WordBlockContainer from './WordBlockContainer';
// Consonsants
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
// Numerals
import Sound_ศูนย์ from '../sounds/numerals/ศูนย์.mp3';
import Sound_หนึง from '../sounds/numerals/หนึง.mp3';
import Sound_สอง from '../sounds/numerals/สอง.mp3';
import Sound_สาม from '../sounds/numerals/สาม.mp3';
import Sound_สี่ from '../sounds/numerals/สี่.mp3';
import Sound_ห้า from '../sounds/numerals/ห้า.mp3';
import Sound_หก from '../sounds/numerals/หก.mp3';
import Sound_เจ็ด from '../sounds/numerals/เจ็ด.mp3';
import Sound_แปด from '../sounds/numerals/แปด.mp3';
import Sound_เก้า from '../sounds/numerals/เก้า.mp3';
import Sound_สิบ from '../sounds/numerals/สิบ.mp3';
// Vowel Diacritics
import Sound_ฤ from '../sounds/vowel_diacritics/ฤ.mp3';
import Sound_ฤๅ from '../sounds/vowel_diacritics/ฤๅ.mp3';
import Sound_ฦ from '../sounds/vowel_diacritics/ฦ.mp3';
import Sound_ฦๅ from '../sounds/vowel_diacritics/ฦๅ.mp3';
import Sound_อ็ from '../sounds/vowel_diacritics/อ็.mp3';
import Sound_อํ from '../sounds/vowel_diacritics/อํ.mp3';
import Sound_อว from '../sounds/vowel_diacritics/อว.mp3';
import Sound_อวย from '../sounds/vowel_diacritics/อวย.mp3';
import Sound_ออ from '../sounds/vowel_diacritics/ออ.mp3';
import Sound_อ็อ from '../sounds/vowel_diacritics/อ็อ.mp3';
import Sound_ออย from '../sounds/vowel_diacritics/ออย.mp3';
import Sound_อ็อย from '../sounds/vowel_diacritics/อ็อย.mp3';
import Sound_อะ from '../sounds/vowel_diacritics/อะ.mp3';
import Sound_อั from '../sounds/vowel_diacritics/อั.mp3';
import Sound_อัย from '../sounds/vowel_diacritics/อัย.mp3';
import Sound_อัว from '../sounds/vowel_diacritics/อัว.mp3';
import Sound_อัวะ from '../sounds/vowel_diacritics/อัวะ.mp3';
import Sound_อา from '../sounds/vowel_diacritics/อา.mp3';
import Sound_อาย from '../sounds/vowel_diacritics/อาย.mp3';
import Sound_อาว from '../sounds/vowel_diacritics/อาว.mp3';
import Sound_อำ from '../sounds/vowel_diacritics/อำ.mp3';
import Sound_อิ from '../sounds/vowel_diacritics/อิ.mp3';
import Sound_อิว from '../sounds/vowel_diacritics/อิว.mp3';
import Sound_อี from '../sounds/vowel_diacritics/อี.mp3';
import Sound_อึ from '../sounds/vowel_diacritics/อึ.mp3';
import Sound_อื from '../sounds/vowel_diacritics/อื.mp3';
import Sound_อือ from '../sounds/vowel_diacritics/อือ.mp3';
import Sound_อุ from '../sounds/vowel_diacritics/อุ.mp3';
import Sound_อุย from '../sounds/vowel_diacritics/อุย.mp3';
import Sound_อู from '../sounds/vowel_diacritics/อู.mp3';
import Sound_เอ from '../sounds/vowel_diacritics/เอ.mp3';
import Sound_เอ็ from '../sounds/vowel_diacritics/เอ็.mp3';
import Sound_เอย from '../sounds/vowel_diacritics/เอย.mp3';
import Sound_เอว from '../sounds/vowel_diacritics/เอว.mp3';
import Sound_เออ from '../sounds/vowel_diacritics/เออ.mp3';
import Sound_เอ็อ from '../sounds/vowel_diacritics/เอ็อ.mp3';
import Sound_เออะ from '../sounds/vowel_diacritics/เออะ.mp3';
import Sound_เอะ from '../sounds/vowel_diacritics/เอะ.mp3';
import Sound_เอา from '../sounds/vowel_diacritics/เอา.mp3';
import Sound_เอาะ from '../sounds/vowel_diacritics/เอาะ.mp3';
import Sound_เอิ from '../sounds/vowel_diacritics/เอิ.mp3';
import Sound_เอีย from '../sounds/vowel_diacritics/เอีย.mp3';
import Sound_เอียว from '../sounds/vowel_diacritics/เอียว.mp3';
import Sound_เอียะ from '../sounds/vowel_diacritics/เอียะ.mp3';
import Sound_เอือ from '../sounds/vowel_diacritics/เอือ.mp3';
import Sound_เอือย from '../sounds/vowel_diacritics/เอือย.mp3';
import Sound_เอือะ from '../sounds/vowel_diacritics/เอือะ.mp3';
import Sound_โอ from '../sounds/vowel_diacritics/โอ.mp3';
import Sound_โอย from '../sounds/vowel_diacritics/โอย.mp3';
import Sound_โอะ from '../sounds/vowel_diacritics/โอะ.mp3';
import Sound_ใอ from '../sounds/vowel_diacritics/ใอ.mp3';
import Sound_ไอ from '../sounds/vowel_diacritics/ไอ.mp3';
import Sound_ไอย from '../sounds/vowel_diacritics/ไอย.mp3';
import Sound_เเอ from '../sounds/vowel_diacritics/เเอ.mp3';
import Sound_เเอ็ from '../sounds/vowel_diacritics/เเอ็.mp3';
import Sound_เเอว from '../sounds/vowel_diacritics/เเอว.mp3';
import Sound_เเอะ from '../sounds/vowel_diacritics/เเอะ.mp3';

export default function AppContent() {
  const consonants = [
    {
      sign: 'ก',
      wordPronunciation: 'gô:- gai',
      word: 'ก ไก่',
      translation: 'Hähnchen',
      sound: Sound_ก,
      id: 1,
    },
    {
      sign: 'ข',
      wordPronunciation: 'khô: khai',
      word: 'ข ไข่',
      translation: 'Ei',
      sound: Sound_ข,
      id: 2,
    },
    {
      sign: 'ฃ',
      wordPronunciation: 'khô: khu:at',
      word: 'ฃ ขวด',
      translation: 'Flasche [veraltet]',
      sound: Sound_ฃ,
      id: 3,
    },
    {
      sign: 'ค',
      wordPronunciation: 'khô: khwa:i',
      word: 'ค ควาย',
      translation: 'Büffel',
      sound: Sound_ค,
      id: 4,
    },
    {
      sign: 'ฅ',
      wordPronunciation: 'khô: khon',
      word: 'ฅ คน',
      translation: 'Menschen [veraltet]',
      sound: Sound_ฅ,
      id: 5,
    },
    {
      sign: 'ฆ',
      wordPronunciation: 'khô: ra khang',
      word: 'ฆ ระฆัง',
      translation: 'Glocke',
      sound: Sound_ฆ,
      id: 6,
    },
    {
      sign: 'ง',
      wordPronunciation: 'ngô: ngu:',
      word: 'ง งู',
      translation: 'Schlange',
      sound: Sound_ง,
      id: 7,
    },
    {
      sign: 'จ',
      wordPronunciation: 'djô: dja:n',
      word: 'จ จาน',
      translation: 'Teller',
      sound: Sound_จ,
      id: 8,
    },
    {
      sign: 'ฉ',
      wordPronunciation: 'tschô: tsching',
      word: 'ฉ ฉิ่ง',
      translation: 'Becken',
      sound: Sound_ฉ,
      id: 9,
    },
    {
      sign: 'ช',
      wordPronunciation: 'tschô: tscha:ng',
      word: 'ช ช้าง',
      translation: 'Elefant',
      sound: Sound_ช,
      id: 10,
    },
    {
      sign: 'ซ',
      wordPronunciation: 'sô: so:',
      word: 'ซ โซ่',
      translation: 'Kette',
      sound: Sound_ซ,
      id: 11,
    },
    {
      sign: 'ฌ',
      wordPronunciation: 'tschô: tschö:',
      word: 'ฌ เฌอ',
      translation: 'Busch; Baum',
      sound: Sound_ฌ,
      id: 12,
    },
    {
      sign: 'ญ',
      wordPronunciation: 'jô: jing',
      word: 'ญ หญิง',
      translation: 'weiblich; Frau',
      sound: Sound_ญ,
      id: 13,
    },
    {
      sign: 'ฎ',
      wordPronunciation: 'dô: tscha da:',
      word: 'ฎ ชฎา',
      translation: 'Krone; Kopfschmuck',
      sound: Sound_ฎ,
      id: 14,
    },
    {
      sign: 'ฏ',
      wordPronunciation: 'tô: pa tak',
      word: 'ฏ ปฏัก',
      translation: 'Spieße; Speer',
      sound: Sound_ฏ,
      id: 15,
    },
    {
      sign: 'ฐ',
      wordPronunciation: 'thô: tha:n',
      word: 'ฐ ฐาน',
      translation: 'Basis; Sockel',
      sound: Sound_ฐ,
      id: 16,
    },
    {
      sign: 'ฑ',
      wordPronunciation: 'thô: mon tho:',
      word: 'ฑ มณโฑ',
      translation: 'weiblicher Eigenname',
      sound: Sound_ฑ,
      id: 17,
    },
    {
      sign: 'ฒ',
      wordPronunciation: 'thô: phu: thau',
      word: 'ฒ ผู้เฒ่า',
      translation: 'Greis',
      sound: Sound_ฒ,
      id: 18,
    },
    {
      sign: 'ณ',
      wordPronunciation: 'nô: ne:n',
      word: 'ณ เณร',
      translation: 'Novize, Neuling',
      sound: Sound_ณ,
      id: 19,
    },
    {
      sign: 'ด',
      wordPronunciation: 'dô: dek',
      word: 'ด เด็ก',
      translation: 'Kind',
      sound: Sound_ด,
      id: 20,
    },
    {
      sign: 'ต',
      wordPronunciation: 'tô: tau',
      word: 'ต เต่า',
      translation: 'Schildkröte',
      sound: Sound_ต,
      id: 21,
    },
    {
      sign: 'ถ',
      wordPronunciation: 'thô: thung',
      word: 'ถ ถุง',
      translation: 'Tasche',
      sound: Sound_ถ,
      id: 22,
    },
    {
      sign: 'ท',
      wordPronunciation: 'thô: tha ha:n',
      word: 'ท ทหาร',
      translation: 'Soldat',
      sound: Sound_ท,
      id: 23,
    },
    {
      sign: 'ธ',
      wordPronunciation: 'thô: thong',
      word: 'ธ ธง',
      translation: 'Flagge',
      sound: Sound_ธ,
      id: 24,
    },
    {
      sign: 'น',
      wordPronunciation: 'nô: nu:',
      word: 'น หนู',
      translation: 'Maus; Ratte',
      sound: Sound_น,
      id: 25,
    },
    {
      sign: 'บ',
      wordPronunciation: 'bô: bai mai',
      word: 'บ ใบไม้',
      translation: 'Blatt; Laub',
      sound: Sound_บ,
      id: 26,
    },
    {
      sign: 'ป',
      wordPronunciation: 'pô: pla:',
      word: 'ป ปลา',
      translation: 'Fisch',
      sound: Sound_ป,
      id: 27,
    },
    {
      sign: 'ผ',
      wordPronunciation: 'phô: phüng',
      word: 'ผ ผึ้ง',
      translation: 'Biene',
      sound: Sound_ผ,
      id: 28,
    },
    {
      sign: 'ฝ',
      wordPronunciation: 'fô: fa:',
      word: 'ฝ ฝา',
      translation: 'Deckel',
      sound: Sound_ฝ,
      id: 29,
    },
    {
      sign: 'พ',
      wordPronunciation: 'phô: pha:n',
      word: 'พ พาน',
      translation: 'Tablett',
      sound: Sound_พ,
      id: 30,
    },
    {
      sign: 'ฟ',
      wordPronunciation: 'fô: fan',
      word: 'ฟ ฟัน',
      translation: 'Zahn',
      sound: Sound_ฟ,
      id: 31,
    },
    {
      sign: 'ภ',
      wordPronunciation: 'phô: sam phau',
      word: 'ภ สําเภา',
      translation: 'Sektion, Abschnitt',
      sound: Sound_ภ,
      id: 32,
    },
    {
      sign: 'ม',
      wordPronunciation: 'mô: ma:',
      word: 'ม ม้า',
      translation: 'Pferd',
      sound: Sound_ม,
      id: 33,
    },
    {
      sign: 'ย',
      wordPronunciation: 'jô: jak',
      word: 'ย ยักษ์',
      translation: 'Riese',
      sound: Sound_ย,
      id: 34,
    },
    {
      sign: 'ร',
      wordPronunciation: 'rô: rü:a',
      word: 'ร เรือ',
      translation: 'Schiff; Boot',
      sound: Sound_ร,
      id: 35,
    },
    {
      sign: 'ล',
      wordPronunciation: 'lô: ling',
      word: 'ล ลิง',
      translation: 'Affe',
      sound: Sound_ล,
      id: 36,
    },
    {
      sign: 'ว',
      wordPronunciation: 'wô: wä:n',
      word: 'ว เเหวน',
      translation: 'Ring',
      sound: Sound_ว,
      id: 37,
    },
    {
      sign: 'ศ',
      wordPronunciation: 'sô: sa:la:',
      word: 'ศ ศาลา',
      translation: 'Pavillon',
      sound: Sound_ศ,
      id: 38,
    },
    {
      sign: 'ษ',
      wordPronunciation: 'sô: rü:si:',
      word: 'ษ ฤาษี',
      translation: 'Einsiedler',
      sound: Sound_ษ,
      id: 39,
    },
    {
      sign: 'ส',
      wordPronunciation: 'sô: sü:a',
      word: 'ส เสือ',
      translation: 'Tiger',
      sound: Sound_ส,
      id: 40,
    },
    {
      sign: 'ห',
      wordPronunciation: 'hô: hi:p',
      word: 'ห หีบ',
      translation: 'Truhe; Kiste',
      sound: Sound_ห,
      id: 41,
    },
    {
      sign: 'ฬ',
      wordPronunciation: 'lô: dju la:',
      word: 'ฬ จุฬา',
      translation: 'Drachen',
      sound: Sound_ฬ,
      id: 42,
    },
    {
      sign: 'อ',
      wordPronunciation: 'ô: a:ng',
      word: 'อ อ่าง',
      translation: 'Waschbecken; Spüle',
      sound: Sound_อ,
      id: 43,
    },
    {
      sign: 'ฮ',
      wordPronunciation: 'hô: nok hu:g',
      word: 'ฮ นกฮูก',
      translation: 'Eule',
      sound: Sound_ฮ,
      id: 44,
    },
  ];
  const numerals = [
    {
      sign: '๐',
      wordPronunciation: 'sun',
      word: 'ศูนย์',
      translation: '0',
      sound: Sound_ศูนย์,
      id: 1,
    },
    {
      sign: '๑',
      wordPronunciation: 'neung',
      word: 'หนึง',
      translation: '1',
      sound: Sound_หนึง,
      id: 2,
    },
    {
      sign: '๒',
      wordPronunciation: 'song',
      word: 'สอง',
      translation: '2',
      sound: Sound_สอง,
      id: 3,
    },
    {
      sign: '๓',
      wordPronunciation: 'sam',
      word: 'สาม',
      translation: '3',
      sound: Sound_สาม,
      id: 4,
    },
    {
      sign: '๔',
      wordPronunciation: 'si',
      word: 'สี่',
      translation: '4',
      sound: Sound_สี่,
      id: 5,
    },
    {
      sign: '๕',
      wordPronunciation: 'ha',
      word: 'ห้า',
      translation: '5',
      sound: Sound_ห้า,
      id: 6,
    },
    {
      sign: '๖',
      wordPronunciation: 'hok',
      word: 'หก',
      translation: '6',
      sound: Sound_หก,
      id: 7,
    },
    {
      sign: '๗',
      wordPronunciation: 'chet',
      word: 'เจ็ด',
      translation: '7',
      sound: Sound_เจ็ด,
      id: 8,
    },
    {
      sign: '๘',
      wordPronunciation: 'paet',
      word: 'แปด',
      translation: '8',
      sound: Sound_แปด,
      id: 9,
    },
    {
      sign: '๙',
      wordPronunciation: 'kao',
      word: 'เก้า',
      translation: '9',
      sound: Sound_เก้า,
      id: 10,
    },
    {
      sign: '๑๐',
      wordPronunciation: 'sip',
      word: 'สิบ',
      translation: '10',
      sound: Sound_สิบ,
      id: 11,
    },
  ];
  const vowels = [
    {
      sign: (
        <p>
          อ<span style={{ color: 'red' }}>ะ</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'a',
      translation: 'kurz',
      sound: Sound_อะ,
      id: 1,
    },
    {
      sign: <p>อั</p>,
      wordPronunciation: '',
      word: 'a',
      translation: 'mittel',
      sound: Sound_อั,
      id: 2,
    },
    {
      sign: (
        <p>
          อ<span style={{ color: 'red' }}>า</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'a',
      translation: 'lang',
      sound: Sound_อา,
      id: 3,
    },
    {
      sign: <p>อิ</p>,
      wordPronunciation: '',
      word: 'i',
      translation: 'kurz',
      sound: Sound_อิ,
      id: 4,
    },
    {
      sign: <p>อี</p>,
      wordPronunciation: '',
      word: 'i',
      translation: 'lang',
      sound: Sound_อี,
      id: 5,
    },
    {
      sign: <p>อึ</p>,
      wordPronunciation: '',
      word: 'ue',
      translation: 'kurz',
      sound: Sound_อึ,
      id: 6,
    },
    {
      sign: <p>อื</p>,
      wordPronunciation: '',
      word: 'ue',
      translation: 'lang',
      sound: Sound_อื,
      id: 7,
    },
    {
      sign: (
        <p>
          อื<span style={{ color: 'red' }}>อ</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'ue',
      translation: 'lang',
      sound: Sound_อือ,
      id: 8,
    },
    {
      sign: <p>อุ</p>,
      wordPronunciation: '',
      word: 'u',
      translation: 'kurz',
      sound: Sound_อุ,
      id: 9,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>เ</span>อ
          <span style={{ color: 'red' }}>ะ</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'e',
      translation: 'kurz',
      sound: Sound_เอะ,
      id: 11,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>เ</span>อ็
        </p>
      ),
      wordPronunciation: '',
      word: 'e',
      translation: 'mittel',
      sound: Sound_เอ็,
      id: 12,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>เ</span>อ
        </p>
      ),
      wordPronunciation: '',
      word: 'e',
      translation: 'lang',
      sound: Sound_เอ,
      id: 13,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>เเ</span>อ
          <span style={{ color: 'red' }}>ะ</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'ae',
      translation: 'kurz',
      sound: Sound_เเอะ,
      id: 14,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>เเ</span>อ็
        </p>
      ),
      wordPronunciation: '',
      word: 'ae',
      translation: 'mittel',
      sound: Sound_เเอ็,
      id: 15,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>เเ</span>อ
        </p>
      ),
      wordPronunciation: '',
      word: 'ae',
      translation: 'lang',
      sound: Sound_เเอ,
      id: 16,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>โ</span>อ
          <span style={{ color: 'red' }}>ะ</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'o',
      translation: 'kurz',
      sound: Sound_โอะ,
      id: 17,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>โ</span>อ
        </p>
      ),
      wordPronunciation: '',
      word: 'o',
      translation: 'lang',
      sound: Sound_โอ,
      id: 18,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>เ</span>อ
          <span style={{ color: 'red' }}>าะ</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'o',
      translation: 'kurz',
      sound: Sound_เอาะ,
      id: 19,
    },
    {
      sign: (
        <p>
          อ็
          <span style={{ color: 'red' }}>อ</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'o',
      translation: 'mittel',
      sound: Sound_อ็อ,
      id: 20,
    },
    {
      sign: (
        <p>
          อ<span style={{ color: 'red' }}>อ</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'o',
      translation: 'lang',
      sound: Sound_ออ,
      id: 21,
    },
    {
      sign: <p>อ็</p>,
      wordPronunciation: '',
      word: 'o',
      translation: 'mittel',
      sound: Sound_อ็,
      id: 21,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>เ</span>อ
          <span style={{ color: 'red' }}>อะ</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'oe',
      translation: 'kurz',
      sound: Sound_เออะ,
      id: 22,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>เ</span>อ
          <span style={{ color: 'red' }}>อ</span>
        </p>
      ),
      wordPronunciation: '',
      word: 'oe',
      translation: 'lang',
      sound: Sound_เออ,
      id: 23,
    },
    {
      sign: (
        <p>
          <span style={{ color: 'red' }}>เ</span>อิ
        </p>
      ),
      wordPronunciation: '',
      word: 'oe',
      translation: 'lang',
      sound: Sound_เอิ,
      id: 24,
    },
  ];
  return (
    <div className='AppContent'>
      <WordBlockContainer
        data={consonants}
        title='Konsonanten (พยัญชนะ)'
        sub='Beiwort'
      />
      <WordBlockContainer data={vowels} title='Vokale (สระ)' sub='Vokallänge' />
      <WordBlockContainer
        data={numerals}
        title='Zahlen (เลขไทย)'
        sub='Beiwort'
      />
    </div>
  );
}
// <span style={{ color: 'red' }}>อ</span>
