import React, { useState } from 'react';
import styled from 'styled-components/macro';
import uuid from 'react-uuid';

import { RemoveTagIcon } from '../../../utils/icons';
import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import { color } from '../../../styles/theme';

const TagInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;

  input {
    display: inline;
    flex: 1;
    width: 100%;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    &:focus {
      outline: transparent;
    }
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;

const Tag = styled.li`
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
  background: ${color.yellow[600]};
`;

const TagArea = ({ title, tags, setTags }) => {
  const [tagInput, setTagInput] = useState('');

  const removeTag = (removeIdx) => {
    setTags(tags.filter((_, index) => index !== removeIdx));
  };

  const addTag = (evt) => {
    if (evt.key === 'Enter' && evt.target.value !== '') {
      setTags([...tags, evt.target.value]);
      setTagInput('');
    }
  };

  const renderedTags = tags.map((tag, index) => {
    return (
      <Tag key={uuid()}>
        <span>{tag}</span>
        <button
          type="button"
          onClick={() => {
            removeTag(index);
            console.log('clicked delete');
          }}
        >
          <RemoveTagIcon />
        </button>
      </Tag>
    );
  });

  return (
    <SectionWrapper>
      <h4>{title}</h4>
      <TagInput className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-500 sm:text-sm">
        <Tags>{renderedTags}</Tags>
        <input
          type="text"
          value={tagInput}
          placeholder="輸入後按 Enter 新增一個標籤"
          onKeyUp={addTag}
          onChange={(e) => {
            setTagInput(e.target.value);
          }}
        />
      </TagInput>
    </SectionWrapper>
  );
};

export default TagArea;
