import React, { useState, useContext } from 'react';
import styled from 'styled-components/macro';
import { HiChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import ThumbnailIntroTemplate1 from '../../utils/images/introTemplateThumbnail/ThumbnailIntroTemplate1.jpg';
import ThumbnailIntroTemplate2 from '../../utils/images/introTemplateThumbnail/ThumbnailIntroTemplate2.jpg';
import { color } from '../../styles/theme';

const SideTemplateMenuContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 15vh;
  z-index: 100;
`;

const TemplateMenuTab = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: ${color.main[400]};
  padding: 0.75rem 0.75rem 1rem 1rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  :hover {
    background-color: ${color.main[500]};

    div {
      transform: translateX(2px);
    }
  }

  :active {
    background-color: ${color.main[600]};
  }
`;

const TabTitle = styled.p`
  writing-mode: vertical-rl;
  color: white;
  margin-top: 0.5rem;
  letter-spacing: 0.25em;
  font-size: 1.125rem;
`;

const RightIconWrapper = styled.div`
  transition: transform 0.2s ease-in-out;
`;

const TemplateMenu = styled.div`
  position: fixed;
  left: ${({ visible }) => (visible ? '0' : '-26vh')};
  top: 15vh;
  transition: 0.5s ease-in-out;
  width: 25vh;
  height: 70vh;
  background-color: ${color.gray[200]};
  padding: 0.5rem 2rem 1rem 1rem;
  border-radius: 0 5px 5px 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: auto;
  }
`;

const MenuTitle = styled.p`
  text-align: center;
  font-size: 1.0875rem;
  letter-spacing: 0.15em;
  margin: 0.5rem auto 0.75rem;
  color: ${color.main[500]};
  font-weight: 500;
  border-bottom: 1px solid ${color.main[500]};
  width: 100px;
  padding-bottom: 0.2rem;
`;

const ThumbnailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding-bottom: 2rem;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.375rem;
  border: 3px solid ${({ isSelected }) => (isSelected ? color.main[100] : 'transparent')};
  transition: all 0.2s;
  margin-bottom: 1rem;
  opacity: ${({ isSelected }) => (isSelected ? '1' : '0.75')};

  :hover {
    cursor: pointer;
    border: 1px solid ${color.main[100]};
    opacity: 1;
  }
`;

const LeftIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  opacity: 0.5;
  transition: opacity 0.2s, right 0.2s;
  cursor: pointer;
  p {
    writing-mode: vertical-rl;
    margin-top: 0.5rem;
    letter-spacing: 0.25em;
    font-size: 0.875rem;
    font-weight: 500;
  }

  :hover {
    opacity: 1;
    right: 6.5px;
  }
`;

const rightIconStyle = {
  color: 'white',
  fontSize: '1.125rem',
};

const leftIconStyle = {
  color: color.gray[500],
  fontSize: '1.25rem',
};

export default function ThumbnailTemplateMenu() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { templateType, setTemplateType } = useContext(IntroCompileContext);

  return (
    <SideTemplateMenuContainer>
      <TemplateMenuTab
        visible={!isExpanded}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <RightIconWrapper>
          <HiOutlineChevronDoubleRight style={rightIconStyle} />
        </RightIconWrapper>
        <TabTitle>展開樣板選單</TabTitle>
      </TemplateMenuTab>
      <TemplateMenu visible={isExpanded}>
        <LeftIconWrapper
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <HiChevronDoubleLeft style={leftIconStyle} />
          <p>收合樣板選單</p>
        </LeftIconWrapper>
        <MenuTitle>樣板選單</MenuTitle>
        <ThumbnailsWrapper>
          <ThumbnailContainer onClick={() => setTemplateType(1)} isSelected={templateType === 1}>
            <img src={ThumbnailIntroTemplate1} alt="樣板一" />
          </ThumbnailContainer>
          <ThumbnailContainer onClick={() => setTemplateType(2)} isSelected={templateType === 2}>
            <img src={ThumbnailIntroTemplate2} alt="樣板二" />
          </ThumbnailContainer>
        </ThumbnailsWrapper>
      </TemplateMenu>
    </SideTemplateMenuContainer>
  );
}
