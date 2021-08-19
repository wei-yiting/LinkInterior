import React from 'react';
import {
  SideImageWrapper,
  SideImageContainer,
} from '../../../../styles/layoutStyledComponents/blockLayout';

export default function RenderSideImage({ imageUrl }) {
  return (
    <SideImageWrapper>
      <SideImageContainer url={imageUrl} />
    </SideImageWrapper>
  );
}
