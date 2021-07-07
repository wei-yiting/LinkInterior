import React from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';

const TagArea = styled.div`
   {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 48px;
    width: 75%;
    padding: 0 8px;
  }
`;

const Tags = styled.ul`
   {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
  }
`;

const Tag = styled.li`
   {
    width: auto;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    background: #0052cc;
  }
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
        <Tags>{renderedTags}</Tags>
      </TagArea>
    </SectionWrapper>
  );
};

export default KeywordTags;
