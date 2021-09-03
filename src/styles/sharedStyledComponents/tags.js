import styled from 'styled-components/macro';

import { color } from '../theme';

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Tag = styled.li`
  width: auto;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 16px;
  font-size: 1rem;
  list-style: none;
  border-radius: 17px;
  margin: 0 12px 8px 0;
  background: ${color.main[500]};

  span {
    letter-spacing: 0.075em;
  }
`;
