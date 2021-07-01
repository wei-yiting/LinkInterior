import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import TemplateMenu from './TemplateMenu';
import Template1A from './Template1A';

const Template = () => {
  const cityOptions = [
    '台北市',
    '新北市',
    '桃園市',
    '臺中市',
    '臺南市',
    '高雄市',
    '新竹縣',
    '苗栗縣',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義縣',
    '屏東縣',
    '宜蘭縣',
    '花蓮縣',
    '臺東縣',
    '澎湖縣',
    '金門縣',
    '連江縣',
    '基隆市',
    '新竹市',
    '嘉義市',
  ];

  const professionOptions = [
    '室內統包',
    '室內設計',
    '室內裝修',
    '軟裝設計',
    '系統家具',
    '系統廚具',
    '木作工程',
    '泥作工程',
    '油漆工程',
    '鐵件工程',
    '水電工程',
    '空調系統',
    '門窗工程',
    '防水工程',
    '各類修繕',
    '其他',
  ];

  const [intro, setIntro] = useState('');
  const [isEdit, setIsEdit] = useState(true);
  const [city, setCity] = useState('');
  const [profession, setProfession] = useState('');
  const [introTags, setIntroTags] = useState([]);

  return (
    <div>
      <ToggleSwitch isEdit={isEdit} setIsEdit={setIsEdit} />
      <TemplateMenu />
      <Template1A
        intro={intro}
        setIntro={setIntro}
        isEdit={isEdit}
        cityOptions={cityOptions}
        city={city}
        setCity={setCity}
        professionOptions={professionOptions}
        profession={profession}
        setProfession={setProfession}
        introTags={introTags}
        setIntroTags={setIntroTags}
      />
    </div>
  );
};

export default Template;
