import React, { useContext } from 'react';

import { IntroRenderContext } from '../../../contexts/IntroRenderContext';
import { Title } from '../../../styles/sharedStyledComponents/headings';
import RenderProfileImage from './renderTemplateItems/RenderProfileImage';
import RenderDropdownInfo from './renderTemplateItems/RenderDropdownInfo';
import RenderIntroParagraph from './renderTemplateItems/RenderIntroParagraph';
import RenderKeyWordTags from './renderTemplateItems/RenderKeywordTags';
import RenderImagesSlider from './renderTemplateItems/RenderImagesSlider';
import RenderContact from './renderTemplateItems/RenderContact';
import RenderServiceProvideCity from './renderTemplateItems/RenderServiceProvideCity';
import { SectionWrapper, RowWrapper } from '../../../styles/layoutStyledComponents/TemplateLayout';

export default function RenderIntroTemplate2() {
  const { companyName } = useContext(IntroRenderContext);

  return (
    <>
      <RowWrapper>
        <RenderProfileImage />
        <SectionWrapper margin="100px 0 50px 100px" width="100%">
          <Title>{companyName}</Title>
          <RenderDropdownInfo
            flexDirection="column"
            margin="0"
            justifyContent="flex-start"
            infoMargin="1rem 0"
          />
        </SectionWrapper>
      </RowWrapper>
      <RenderIntroParagraph title="業者介紹" />
      <RenderKeyWordTags />
      <RenderImagesSlider />
      <RenderServiceProvideCity />
      <RenderContact
        width="80%"
        flexDirection="row"
        margin="30px auto"
        justifyContent="space-around"
      />
    </>
  );
}
