import React, { useEffect, useState, useContext } from 'react';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import { randomLinearGradient } from '../../../utils/constants/linearGradient';
import { HeroImageContainer } from '../../../styles/layoutStyledComponents/templateLayout';

export default function ProfileImage() {
  const { heroImageUrl } = useContext(IntroCompileContext);
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
