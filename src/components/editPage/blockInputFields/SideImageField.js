import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import { LightSmallSelectImageInputButton } from '../../shared/SelectImageInputButton';
import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import ImagePlaceholder from '../templateInputFields/ImagePlaceholder';

const ImageArea = styled.div`
  position: relative;
  width: 45%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UploadedImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background: linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)),
    center / cover no-repeat url('${(props) => props.url}');
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function SideImageField({ blockIdx, randomBgIdx }) {
  const { blockList, setBlockList } = useContext(IntroCompileContext);

  const handleImageSelected = (evt) => {
    if (evt.target.files[0]) {
      setBlockList(
        blockList.map((block, index) => {
          if (index === blockIdx) {
            return {
              ...block,
              imageFile: evt.target.files[0],
              localImageUrl: URL.createObjectURL(evt.target.files[0]),
            };
          }
          return block;
        }),
      );
      URL.revokeObjectURL(evt.target.files[0]);
    }
  };

  return (
    <ImageArea>
      {blockList[blockIdx].localImageUrl ? (
        <UploadedImageContainer url={blockList[blockIdx].localImageUrl} />
      ) : (
        <ImagePlaceholder idx={randomBgIdx} />
      )}
      <ButtonWrapper>
        <LightSmallSelectImageInputButton
          fieldName={`blockImage${blockIdx}`}
          buttonText={blockList[blockIdx].localImageUrl ? '更換圖片' : '選擇圖片'}
          onSelectHandler={handleImageSelected}
        />
      </ButtonWrapper>
    </ImageArea>
  );
}
