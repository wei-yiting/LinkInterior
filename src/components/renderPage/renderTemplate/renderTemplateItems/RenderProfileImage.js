import React, { useEffect, useState, useContext } from 'react';

import { IntroRenderContext } from '../../../../contexts/IntroRenderContext';
import { HeroImageContainer } from '../../../../styles/layoutStyledComponents/TemplateLayout';

export default function ProfileImage() {
  const { heroImageUrl } = useContext(IntroRenderContext);
  const [imageContainerStyle, setimageContainerStyle] = useState({});

  useEffect(() => {
    const containerStyle = {
      background: `center / cover no-repeat url("${heroImageUrl}")`,
    };

    setimageContainerStyle(containerStyle);
  }, [heroImageUrl]);

  return <HeroImageContainer width="400px" height="350px" style={imageContainerStyle} />;
}
