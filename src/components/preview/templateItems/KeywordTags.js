import React from 'react';
import styled from 'styled-components/macro';
import uuid from 'react-uuid';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import { TagsList, Tag } from '../../../styles/sharedStyledComponents/tags';

const TagArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 75%;
  padding: 0 8px;
`;

const KeywordTags = ({ tags }) => {
  const renderedTags = tags.map((tag) => {
    return (
      <Tag key={uuid()}>
        <span>{tag}</span>
      </Tag>
    );
  });

  return (
    <SectionWrapper>
      <TagArea>
        <TagsList>{renderedTags}</TagsList>
      </TagArea>
    </SectionWrapper>
  );
};

export default KeywordTags;
