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
    margin: ${({ type, template2 }) =>
      (template2 && type === 'dropdown' && '0.25rem auto 0') ||
      (template2 && type === 'introParagraph' && '0.5rem auto') ||
      '30px auto 15px'};
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
    height: ${({ template2 }) => (template2 ? '45vw' : '30vh')};
    width: ${({ template2 }) => (template2 ? '45vw' : '100%')};
    margin: ${({ template2 }) => template2 && '5vh auto 0'};
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  width: 100%;
  flex: 1;
  margin: ${({ margin }) => margin || '0'};
  @media (max-width: 768px) {
    justify-content: ${({ template2 }) => template2 && 'center'};
    margin: ${({ template2 }) => template2 && '0.75rem 0'};
    padding-right: ${({ template2 }) => template2 && '1rem'};
  }
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
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: calc(33.3% - 1rem);
  height: 225px;
  margin: 0.5rem;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    width: ${({ template2 }) => (template2 ? '47.5%' : '100%')};
    height: ${({ template2 }) => template2 && '30vw'};
    margin: ${({ template2 }) => (template2 ? '0 0 1rem' : '0 0 2rem')};
    justify-content: ${({ template2 }) => (template2 ? 'space-beteen' : 'flex-start')};
    :nth-child(2n + 1) {
      margin: ${({ template2 }) => template2 && '0 0.75rem 0.75rem 0'};
    }
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
  flex-direction: ${({ template2 }) => (template2 ? 'row' : 'column')};
  flex: 1;
  justify-content: space-around;
  @media (max-width: 768px) {
    padding: 2rem 1rem 1.5rem;
    flex-direction: ${({ template2 }) => template2 && 'column'};
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
    justify-content: center;
  }
`;

export const HeroImageCompanyName = styled.span`
  font-size: 3rem;
  z-index: 2;
  color: white;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1.375em;
  width: 90%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 80%;
  }
`;
