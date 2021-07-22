import React, { useState, useContext } from 'react';
import styled from 'styled-components/macro';
import uuid from 'react-uuid';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';

import { RemoveTagIcon } from '../../../utils/icons';
import { SectionWrapper } from '../../../styles/layoutStyledComponents/TemplateLayout';
import { TagsList, Tag } from '../../../styles/sharedStyledComponents/tags';
import { Heading4 } from '../../../styles/sharedStyledComponents/headings';
import { color } from '../../../styles/theme';

const TagsField = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;

  &:focus-within {
    border: 1px solid ${color.main[500]};
    box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width))
      var(--tw-ring-color);
    --tw-ring-color: ${color.main[500]};
  }
`;

export default function TagArea({ title }) {
  const { introTags, setIntroTags } = useContext(IntroCompileContext);
  const [tagInput, setTagInput] = useState('');

  const removeTag = (removeIdx) => {
    setIntroTags(introTags.filter((_, index) => index !== removeIdx));
  };

  const addTag = (evt) => {
    if (!evt.isComposing && evt.key === 'Enter' && evt.target.value !== '') {
      setIntroTags([...introTags, evt.target.value]);
      setTagInput('');
    }
  };

  const renderedTags = introTags.map((tag, index) => {
    return (
      <Tag key={uuid()}>
        <span>{tag}</span>
        <button
          type="button"
          onClick={() => {
            removeTag(index);
          }}
        >
          <RemoveTagIcon />
        </button>
      </Tag>
    );
  });

  return (
    <SectionWrapper>
      <Heading4>{title}</Heading4>
      <TagsField className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-base">
        <TagsList>{renderedTags}</TagsList>
        <input
          type="text"
          value={tagInput}
          placeholder="輸入後按 Enter 新增一個標籤"
          onKeyPress={addTag}
          onChange={(e) => {
            setTagInput(e.target.value);
          }}
          style={{ height: '48px' }}
          className=" block w-full sm:text-base border-0 border-transparent focus:border-0 focus:ring-0 inline flex-1 align-bottom"
        />
      </TagsField>
    </SectionWrapper>
  );
}
