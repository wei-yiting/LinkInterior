import React, { useEffect, useState } from 'react';

import { randomLinearGradient } from '../../../utils/constants/linearGradient';
import { HeroImageContainer } from '../../../styles/layout/TemplateLayout';

export default function ProfileImage({ heroImageUrl }) {
  const [imageContainerStyle, setimageContainerStyle] = useState({});

  useEffect(() => {
    const containerStyle = heroImageUrl
      ? {
          background: `center / cover no-repeat url("${heroImageUrl}")`,
        }
      : {
          background: `linear-gradient( 135deg, ${randomLinearGradient[0]}, ${randomLinearGradient[1]})`,
        };
    setimageContainerStyle(containerStyle);
  }, [heroImageUrl]);

  return <HeroImageContainer width="400px" height="350px" style={imageContainerStyle} />;
}
