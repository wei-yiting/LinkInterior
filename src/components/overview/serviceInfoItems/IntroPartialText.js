import React from 'react';
import styled from 'styled-components/macro';

import { color } from '../../../styles/theme';

const intro =
  '我們在室內裝修服務\n已經有30年了\n我不敢說我們是最好的,但是我們用心(品質堅持成果),是我們一直追求的,\n請跟我們聯絡,我們不會讓你失望,讓我們有一次服務你的機會\n關於室內裝潢我們都有服務,\n小到鑽洞,大到蓋精緻樣品屋,老舊公寓翻新,豪宅內裝客製化等住宅及商業空間經驗豐富。\n專屬超耐磨地板、油漆粉刷、木工施作、系統家具、水電工程、泥作貼磚、鐵工金屬焊接......等專業團隊,效率佳,溝通佳,品質佳!';

const IntroText = styled.p`
  line-height: 1.5rem;
  color: ${color.gray[700]};
`;

export default function IntroPartialText() {
  const textWithoutLineBreak = intro.replace('\n', ' ');
  const partialText = `${textWithoutLineBreak.slice(0, 40)} ...`;
  return <IntroText>{partialText}</IntroText>;
}
