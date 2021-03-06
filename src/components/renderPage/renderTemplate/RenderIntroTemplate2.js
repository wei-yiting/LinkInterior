import React, { useContext } from 'react';

import { IntroRenderContext } from '../../../contexts/IntroRenderContext';
import { Title } from '../../../styles/sharedStyledComponents/headings';
import RenderProfileImage from './renderTemplateItems/RenderProfileImage';
import RenderDropdownInfo from './renderTemplateItems/RenderDropdownInfo';
import RenderIntroParagraph from './renderTemplateItems/RenderIntroParagraph';
import RenderKeyWordTags from './renderTemplateItems/RenderKeywordTags';
import RenderImagesWall from './renderTemplateItems/RenderImagesWall';
import RenderImagesSlider from './renderTemplateItems/RenderImagesSlider';
import RenderContact from './renderTemplateItems/RenderContact';
import RenderServiceProvideCity from './renderTemplateItems/RenderServiceProvideCity';
import { SectionWrapper, RowWrapper } from '../../../styles/layoutStyledComponents/templateLayout';
import {
  MobileHiddenWrapper,
  MobileShowWrapper,
} from '../../../styles/layoutStyledComponents/responsiveLayout';

export default function RenderIntroTemplate2() {
  const { companyName } = useContext(IntroRenderContext);

  return (
    <>
      <RowWrapper>
        <RenderProfileImage />
        <SectionWrapper margin="100px 0 50px 100px" width="100%">
          <Title introCompanyName>{companyName}</Title>
          <RenderDropdownInfo
            flexDirection="column"
            margin="0"
            justifyContent="flex-start"
            infoMargin="1rem 0"
            template2
          />
        </SectionWrapper>
      </RowWrapper>
      <RenderIntroParagraph title="業者介紹" template2 />
      <RenderKeyWordTags />
      <MobileHiddenWrapper>
        <RenderImagesSlider />
      </MobileHiddenWrapper>
      <MobileShowWrapper>
        <RenderImagesWall template2 />
      </MobileShowWrapper>
      <RenderServiceProvideCity />
      <RenderContact width="80%" template2 margin="30px auto" justifyContent="space-around" />
    </>
  );
}
