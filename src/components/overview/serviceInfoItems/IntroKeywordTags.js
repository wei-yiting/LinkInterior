import React from 'react';
import styled from 'styled-components/macro';
import uuid from 'react-uuid';

import { color } from '../../../styles/theme';

const TagsContainer = styled.div`
  margin: 1rem 0 0.5rem;
`;

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;

const Tag = styled.li`
  width: auto;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.main[500]};
  padding: 0 8px;
  font-size: 0.9375rem;
  line-height: 0.9375rem;
  list-style: none;
  border-radius: 16px;
  margin: 0 6px 12px 0;
  border: 1px solid ${color.main[500]};

  span {
    letter-spacing: 0.075em;
  }
`;

export default function IntroKeywordTags({ data }) {
  const slicedKeywordTags = data.keywordTags.slice(0, 5);

  const renderedTags = slicedKeywordTags.map((tag) => {
    return (
      <Tag key={uuid()}>
        <span>{tag}</span>
      </Tag>
    );
  });

  return (
    <TagsContainer>
      <TagsList>{renderedTags}</TagsList>
    </TagsContainer>
  );
}
