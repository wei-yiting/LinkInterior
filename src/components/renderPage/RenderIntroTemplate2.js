import React, { useContext } from 'react';

import { IntroRenderContext } from '../../contexts/IntroRenderContext';
import { Title } from '../../styles/sharedStyledComponents/headings';
import RenderProfileImage from './renderItems/RenderProfileImage';
import RenderDropdownInfo from './renderItems/RenderDropdownInfo';
import RenderIntroParagraph from './renderItems/RenderIntroParagraph';
import RenderKeyWordTags from './renderItems/RenderKeywordTags';
import RenderImagesWall from './renderItems/RenderImagesWall';
import RenderContact from './renderItems/RenderContact';
import RenderServiceProvideCity from './renderItems/RenderServiceProvideCity';
import { SectionWrapper, RowWrapper } from '../../styles/layoutStyledComponents/TemplateLayout';

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
      <RenderImagesWall />
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
