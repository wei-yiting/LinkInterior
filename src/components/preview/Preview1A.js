import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import IntroParagraph from './items/IntroParagraph';
import InfoSpan from './items/InfoSpan';

const Preview1A = ({ intro, city, profession }) => {
  return (
    <div>
      <IntroParagraph title="業者介紹" intro={intro} />
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      <InfoSpan info={city} />
      <FontAwesomeIcon icon={faBriefcase} />
      <InfoSpan info={profession} />
    </div>
  );
};

export default Preview1A;
