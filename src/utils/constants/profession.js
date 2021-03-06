import uuid from 'react-uuid';

const professions = [
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
  '門窗工程',
  '防水工程',
  '其他',
];

const professionOptions = professions.map((profession) => {
  return { id: uuid(), name: profession };
});

export default professionOptions;
