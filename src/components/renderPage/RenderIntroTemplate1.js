import React from 'react';

import RenderHeroImage from './renderItems/RenderHeroImage';
import RenderDropdownInfo from './renderItems/RenderDropdownInfo';
import RenderIntroParagraph from './renderItems/RenderIntroParagraph';
import RenderKeywordTags from './renderItems/RenderKeywordTags';
import RenderImagesWall from './renderItems/RenderImagesWall';
import RenderContact from './renderItems/RenderContact';
import RenderServiceProvideCity from './renderItems/RenderServiceProvideCity';
import { RowWrapper } from '../../styles/layoutStyledComponents/TemplateLayout';

export default function RenderIntroTemplate1() {
  return (
    <>
      <RenderHeroImage />
      <RenderDropdownInfo flexDirection="row" margin="50px auto 30px" />
      <RenderIntroParagraph title="業者介紹" />
      <RenderKeywordTags />
      <RenderImagesWall />
      <RowWrapper flexDirection="row">
        <RenderContact width="50%" margin="30px 0" />
        <RenderServiceProvideCity width="40%" margin="30px 0" />
      </RowWrapper>
    </>
  );
}
