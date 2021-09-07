import styled from 'styled-components/macro';

import { color } from '../theme';

export const SectionWrapper = styled.section`
  margin: ${({ margin }) => margin || '50px auto 30px'};
  display: flex;
  flex: ${({ flex }) => flex || '1'};
  width: ${({ width }) => width || '80%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};

  @media (max-width: 768px) {
    margin: 30px auto 15px;
    width: ${({ mobileWidth }) => mobileWidth || '90%'};
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: ${({ justifyContent }) => justifyContent || 'column'};
    width: 100%;
  }
`;

export const HeroImageContainer = styled.div`
  position: relative;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '350px'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  width: 100%;
  flex: 1;
  margin: ${({ margin }) => margin || '0'};
`;

export const IntroParagraphText = styled.p`
  white-space: pre-wrap;
  margin: 0.75rem 1.5rem;
  line-height: 2rem;
  @media (max-width: 768px) {
    margin: 0.25rem 0;
  }
`;

export const TagArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 100%;
  padding: 0 8px;
`;

export const ImagesGalleryContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: space-between;
  justify-content: flex-start;
  position: relative;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  width: calc(33.3% - 1rem);
  height: 225px;
  margin: 0.5rem;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 2rem;
    :last-child {
      margin: 0;
    }
  }
`;

export const ContactArea = styled.div`
  background-color: ${color.gray[100]};
  padding: 1.75rem 3rem 0.75rem;
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  flex: 1;
  justify-content: space-around;
  @media (max-width: 768px) {
    padding: 2rem 1rem 1.5rem;
  }
`;

export const ContactInfoWrapper = styled.div`
  margin-bottom: 1.25rem;
  @media (max-width: 768px) {
    margin: 0 0 1rem 0.5rem;
    display: flex;
    align-items: center;
    svg {
      transform: scale(1.2);
      display: block;
      margin-top: 0.25rem;
    }
  }
`;

export const InfoSpan = styled.span`
  margin-left: 0.5rem;
  font-size: 1.0625rem;
  font-weight: 500;
  color: ${color.gray[700]};
  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.5em;
    display: block;
  }
`;

export const SocailMediaContainer = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
  @media (max-width: 768px) {
    transform: scale(1.2);
    transform-origin: top center;
    margin: 0 auto 2rem;
    width: 85vw;
    justify-content: center;
  }
`;

export const HeroImageCompanyName = styled.span`
  font-size: 3rem;
  z-index: 2;
  color: white;
  font-weight: 600;
  letter-spacing: 0.1em;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
