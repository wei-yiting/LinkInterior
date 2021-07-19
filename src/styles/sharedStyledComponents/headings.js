import styled from 'styled-components/macro';

import { fontSize, color } from '../theme';

export const Title = styled.h1`
  font-size: ${({ size }) => size || '3rem'};
  color: ${color.gray[600]};
  font-weight: 600;
  letter-spacing: 0.075em;
  line-height: 1.5em;
  margin: 0.5em 0;
`;

export const Heading1 = styled.h2`
  font-size: ${fontSize.large[1]};
  color: ${color.gray[600]};
  font-weight: 600;
  letter-spacing: 0.075em;
  line-height: 1.5em;
  margin: 0.5em 0;
`;

export const Heading2 = styled.h3`
  font-size: ${fontSize.large[2]};
  color: ${color.gray[600]};
  font-weight: 600;

  letter-spacing: 0.075em;
  line-height: 1.5em;
  margin: 0.5em 0;
`;

export const Heading3 = styled.h4`
  font-size: ${fontSize.large[3]};
  letter-spacing: 0.025em;
  color: ${color.gray[700]};
  font-weight: 500;
  line-height: 1.5em;
  margin: 0.75em 0;
`;

export const Heading4 = styled.h5`
  font-size: ${fontSize.large[4]};
  line-height: 1.5em;
  letter-spacing: 0.025em;
  color: ${color.gray[700]};
  font-weight: 500;
  margin: 0.375em 0;
`;
