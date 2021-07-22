import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import uuid from 'react-uuid';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import { SectionWrapper } from '../../../styles/layoutStyledComponents/TemplateLayout';
import { TagsList, Tag } from '../../../styles/sharedStyledComponents/tags';

const TagArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 75%;
  padding: 0 8px;
`;

export default function KeywordTags() {
  const { introTags } = useContext(IntroCompileContext);

  const renderedTags = introTags.map((tag) => {
    return (
      <Tag key={uuid()}>
        <span>{tag}</span>
      </Tag>
    );
  });

  return introTags.length ? (
    <SectionWrapper>
      <TagArea>
        <TagsList>{renderedTags}</TagsList>
      </TagArea>
    </SectionWrapper>
  ) : null;
}
