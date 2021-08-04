import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import uuid from 'react-uuid';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import fullWidthTextThumbnail from '../../utils/images/blocksThumbnail/fullWidthText.png';
import imageLeftThumbnail from '../../utils/images/blocksThumbnail/imageLeft.png';
import imageRightThumbnail from '../../utils/images/blocksThumbnail/imageRight.png';
import { color } from '../../styles/theme';
import { CirclePlusIcon } from '../../utils/icons/fontAwesome';

const BlockMenuArea = styled.section`
  width: 100%;
  margin: 0 auto;
  background-color: ${color.gray[100]};
  padding: 2rem 1rem;
  border-radius: 10px;
  box-shadow: 3px 3px 6px ${color.gray[100]};
`;

const AreaTitle = styled.h4`
  font-size: 1.25rem;
  text-align: center;
  color: ${color.main[500]};
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 0 auto 1.25rem;
  width: fit-content;
  border-bottom: 1px solid ${color.main[500]};
  padding: 0 2rem 0.5rem;
`;

const AreaExplain = styled.p`
  font-size: 0.9375rem;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${color.gray[600]};
  margin-bottom: 1.25rem;
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Thumbnail = styled.div`
  position: relative;
  height: fit-content;
  width: 32%;
  padding: 0.5rem;
  border: 1px solid transparent;
  transition: border 0.2s;

  p {
    transition: opacity 0.2s;
    padding: 0.5rem 0.25rem;
    border-radius: 5px;
    opacity: 0;
    background-color: ${color.gray[50]};

    p {
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      color: ${color.main[500]};
      transition: opacity 0.2s;
    }
  }

  img {
    width: 100%;
  }

  :hover {
    cursor: pointer;
    border: 1px solid ${color.main[300]};
    p {
      opacity: 0.8;
    }
    div {
      opacity: 0.5;
    }
  }

  :active {
    p {
      opacity: 0.9;
    }
    div {
      opacity: 0.9;
    }
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.gray[50]};
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.p`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const iconStyle = {
  width: '2rem',
  height: '2rem',
  color: color.main[300],
};

export default function BlockMenu() {
  const { blockList, setBlockList } = useContext(IntroCompileContext);

  const addBlock = (type) => {
    setBlockList([
      ...blockList,
      {
        id: uuid(),
        type,
        text: '',
        localImageUrl: '',
        imageFile: null,
      },
    ]);
  };

  return (
    <BlockMenuArea>
      <AreaTitle>新增圖文內容</AreaTitle>
      <AreaExplain>（選擇橫幅樣式，點擊即可新增可編輯的圖文區塊）</AreaExplain>
      <ThumbnailsContainer>
        <Thumbnail
          onClick={() => {
            addBlock('A');
          }}
        >
          <IconContainer>
            <CirclePlusIcon style={iconStyle} />
            <p>全幅文字</p>
          </IconContainer>
          <HoverOverlay />
          <img src={fullWidthTextThumbnail} alt="全幅文字" />
        </Thumbnail>
        <Thumbnail
          onClick={() => {
            addBlock('B');
          }}
        >
          <IconContainer>
            <CirclePlusIcon style={iconStyle} />
            <p>左文右圖</p>
          </IconContainer>
          <HoverOverlay />
          <img src={imageRightThumbnail} alt="左文右圖" />
        </Thumbnail>
        <Thumbnail
          onClick={() => {
            addBlock('C');
          }}
        >
          <IconContainer>
            <CirclePlusIcon style={iconStyle} />
            <p>左圖右文</p>
          </IconContainer>
          <HoverOverlay />
          <img src={imageLeftThumbnail} alt="左圖右文" />
        </Thumbnail>
      </ThumbnailsContainer>
    </BlockMenuArea>
  );
}
