import styled from 'styled-components/macro';

import { color } from '../theme';

export const Button = styled.button`
  background-color: #fff;
  color: #888;
  border: none;
  font: 1rem;
  padding: 0.5em 1em;
  border-radius: 10px;
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  border: none;
  font: 1rem;
`;

export const PrimaryButton = styled.button`
  font-size: ${({ fontSize }) => fontSize || '1.125rem'};
  letter-spacing: 0.075em;
  background-color: ${color.main[400]};
  border: 2px solid ${color.main[400]};
  color: white;
  border-radius: 0.5rem;
  padding: ${({ padding }) => padding || '0.75em 3em'};
  width: ${({ width }) => width || 'auto'};
  transition: all 0.2s;
  font-weight: 500;

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${color.main[500]};
    border: 2px solid ${color.main[500]};
  }

  :active {
    background-color: ${color.main[400]};
  }
`;

export const OutlineButton = styled.button`
  font-size: ${({ fontSize }) => fontSize || '1.125rem'};
  letter-spacing: 0.075em;
  background-color: white;
  border: 2px solid ${color.main[400]};
  color: ${color.main[500]};
  border-radius: 0.5rem;
  padding: 0.75em 3em;
  width: ${({ width }) => width || 'auto'};
  transition: all 0.2s;
  font-weight: 500;

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${color.main[500]};
    color: white;
  }

  :active {
    background-color: ${color.main[400]};
  }
`;

export const DarkerButton = styled.button`
  font-size: ${({ fontSize }) => fontSize || '1.125rem'};
  letter-spacing: 0.075em;
  background-color: ${color.main[600]};
  border: 2px solid ${color.main[600]};
  color: white;
  border-radius: 0.5rem;
  padding: 0.75em 3em;
  width: ${({ width }) => width || 'auto'};
  transition: all 0.2s;
  font-weight: 500;
  transition: all 0.2s;

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${color.main[700]};
  }

  :active {
    background-color: ${color.main[800]};
  }
`;
