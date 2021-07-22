import React, { useContext } from 'react';
import uuid from 'react-uuid';

import { IntroRenderContext } from '../../../contexts/IntroRenderContext';
import { SectionWrapper, TagArea } from '../../../styles/layoutStyledComponents/TemplateLayout';
import { TagsList, Tag } from '../../../styles/sharedStyledComponents/tags';

export default function RenderKeyWordTags() {
  const { introTags } = useContext(IntroRenderContext);

  const renderedTags = introTags.map((tag) => {
    return (
      <Tag key={uuid()}>
        <span>{tag}</span>
      </Tag>
    );
  });

  return introTags.length ? (
    <SectionWrapper margin="30px auto">
      <TagArea>
        <TagsList>{renderedTags}</TagsList>
      </TagArea>
    </SectionWrapper>
  ) : null;
}
