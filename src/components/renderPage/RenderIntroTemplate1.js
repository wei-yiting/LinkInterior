import React from 'react';

import RenderHeroImage from './renderTemplateItems/RenderHeroImage';
import RenderDropdownInfo from './renderTemplateItems/RenderDropdownInfo';
import RenderIntroParagraph from './renderTemplateItems/RenderIntroParagraph';
import RenderKeywordTags from './renderTemplateItems/RenderKeywordTags';
import RenderImagesWall from './renderTemplateItems/RenderImagesWall';
import RenderContact from './renderTemplateItems/RenderContact';
import RenderServiceProvideCity from './renderTemplateItems/RenderServiceProvideCity';
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
