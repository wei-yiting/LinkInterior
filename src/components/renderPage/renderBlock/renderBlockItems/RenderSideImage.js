import React from 'react';
import {
  SideImageWrapper,
  SideImageContainer,
} from '../../../../styles/layoutStyledComponents/BlockLayout';

export default function RenderSideImage({ imageUrl }) {
  return (
    <SideImageWrapper>
      <SideImageContainer url={imageUrl} />
    </SideImageWrapper>
  );
}
