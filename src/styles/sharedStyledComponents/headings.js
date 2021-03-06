import styled from 'styled-components/macro';

import { fontSize, color } from '../theme';

export const Title = styled.h1`
  font-size: ${({ size }) => size || '3rem'};
  color: ${color.gray[600]};
  font-weight: 600;
  letter-spacing: 0.075em;
  line-height: 1.5em;
  margin: 0.5em 0;
  @media (max-width: 768px) {
    margin: ${({ introCompanyName }) => (introCompanyName ? '0 auto' : ' 0.5em 0')};
    font-size: ${({ introCompanyName }) => introCompanyName && '2.25rem'};
    text-align: ${({ introCompanyName }) => introCompanyName && 'center'};
  }
`;

export const Heading1 = styled.h2`
  font-size: ${({ size }) => size || fontSize.large[1]};
  color: ${({ fontColor }) => fontColor || color.gray[600]};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  letter-spacing: 0.075em;
  line-height: ${({ lineHeight }) => lineHeight || '1.5em'};
  margin: ${({ margin }) => margin || '0.5em 0'};
  text-align: ${({ textAlign }) => textAlign || ''};
`;

export const Heading2 = styled.h3`
  font-size: ${fontSize.large[2]};
  color: ${({ fontColor }) => fontColor || color.gray[600]};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  letter-spacing: 0.075em;
  line-height: 1.5em;
  margin: 0.5em 0;
  @media (max-width: 768px) {
    text-align: ${({ introBlocksTitle }) => introBlocksTitle && 'center'};

    span {
      display: ${({ introBlocksTitle }) => introBlocksTitle && 'block'};
      font-size: ${({ introBlocksTitle }) => introBlocksTitle && '1.675rem'};
      margin-top: ${({ introBlocksTitle }) => introBlocksTitle && '0.5rem'};
      line-height: ${({ introBlocksTitle }) => introBlocksTitle && '1.4em'};
    }
  }
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
  color: ${({ fontColor }) => fontColor || color.gray[700]};
  font-weight: 500;
  margin: 0.375em 0;
`;
