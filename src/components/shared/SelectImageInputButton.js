import React from 'react';
import styled from 'styled-components/macro';

import { color } from '../../styles/theme';
import { AddIcon } from '../../utils/icons/fontAwesome';

const SolidLabel = styled.label`
  font-size: 1.125rem;
  background-color: ${color.main[400]};
  padding: 0.75rem 1.5rem 0.75rem 1.25rem;
  color: white;
  border-radius: 0.5rem;
  letter-spacing: 0.1rem;
  border: 4px solid white;
  transition: background-color 0.1s, border 0.2s;
  opacity: 0.9;
  :hover {
    background-color: ${color.main[500]};
    border: 4px solid ${color.gray[100]};
    opacity: 1;
  }
  :active {
    background-color: ${color.main[600]};
    border: 4px solid ${color.gray[200]};
    color: ${color.gray[100]};
  }
`;

const LightLabel = styled.label`
  font-size: 1.125rem;
  font-weight: 500;
  background-color: white;
  padding: 0.75rem 1.5rem 0.75rem 1.25rem;
  color: ${color.main[300]};
  border-radius: 0.5rem;
  letter-spacing: 0.1rem;
  transition: opacity 0.1s;
  border: 4px solid ${color.main[200]};
  opacity: 0.85;
  :hover {
    opacity: 1;
  }
  :active {
    background-color: ${color.gray[100]};
  }
`;

const LightSmallLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  background-color: white;
  padding: 0.5rem 1.25rem 0.5rem 1rem;
  color: ${color.main[300]};
  border-radius: 0.375rem;
  letter-spacing: 0.0875rem;
  transition: opacity 0.1s;
  border: 3px solid ${color.main[200]};
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
  :active {
    background-color: ${color.gray[100]};
  }
`;

export const DarkSelectImageInputButton = ({
  fieldName,
  buttonText,
  onSelectHandler,
  multiple,
  iconStyle,
}) => {
  return (
    <SolidLabel htmlFor={fieldName}>
      <input
        type="file"
        id={fieldName}
        onChange={onSelectHandler}
        accept=".jpg, .png, .jpeg"
        style={{ display: 'none' }}
        multiple={multiple || false}
      />
      <AddIcon style={iconStyle || { color: 'white', marginRight: '0.25rem' }} />
      {buttonText}
    </SolidLabel>
  );
};

export const LightSelectImageInputButton = ({
  fieldName,
  buttonText,
  onSelectHandler,
  multiple,
}) => {
  return (
    <LightLabel htmlFor={fieldName}>
      <input
        type="file"
        id={fieldName}
        onChange={onSelectHandler}
        accept=".jpg, .png, .jpeg"
        style={{ display: 'none' }}
        multiple={multiple || false}
      />
      <AddIcon style={{ color: `${color.main[200]}`, marginRight: '0.25rem' }} />
      {buttonText}
    </LightLabel>
  );
};

export const LightSmallSelectImageInputButton = ({
  fieldName,
  buttonText,
  onSelectHandler,
  multiple,
}) => {
  return (
    <LightSmallLabel htmlFor={fieldName}>
      <input
        type="file"
        id={fieldName}
        onChange={onSelectHandler}
        accept=".jpg, .png, .jpeg"
        style={{ display: 'none' }}
        multiple={multiple || false}
      />
      <AddIcon style={{ color: `${color.main[200]}`, marginRight: '0.25rem' }} />
      {buttonText}
    </LightSmallLabel>
  );
};
