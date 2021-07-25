import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faBriefcase,
  faTimes,
  faPlus,
  faMobileAlt,
  faPhoneAlt,
  faEnvelope,
  faHome,
  faLaptop,
  faImage,
  faTrashAlt,
  faPen,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faLine, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  contactIconStyle,
  introIconStyle,
  imageIconStyle,
  toggleSwitchIconStyle,
  largeMediaIconStyle,
} from '../../styles/styleObject/iconsStyle';

import './icon.css';

export const LocationIcon = () => {
  return <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth style={introIconStyle} />;
};

export const ProfessionIcon = () => {
  return <FontAwesomeIcon icon={faBriefcase} fixedWidth style={introIconStyle} />;
};

export const RemoveTagIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faTimes}
      fixedWidth
      style={{ color: 'white', marginLeft: '0.5rem', cursor: 'pointer' }}
    />
  );
};

export const AddIcon = ({ style }) => {
  return <FontAwesomeIcon icon={faPlus} fixedWidth style={style} />;
};

export const MobileIcon = () => {
  return <FontAwesomeIcon icon={faMobileAlt} fixedWidth style={contactIconStyle} />;
};

export const PhoneIcon = () => {
  return <FontAwesomeIcon icon={faPhoneAlt} fixedWidth style={contactIconStyle} />;
};

export const LineIcon = () => {
  return <FontAwesomeIcon icon={faLine} fixedWidth style={contactIconStyle} />;
};

export const EmailIcon = () => {
  return <FontAwesomeIcon icon={faEnvelope} fixedWidth style={contactIconStyle} />;
};

export const AddressIcon = () => {
  return <FontAwesomeIcon icon={faHome} fixedWidth style={contactIconStyle} />;
};

export const WebsiteIcon = () => {
  return <FontAwesomeIcon icon={faLaptop} fixedWidth style={contactIconStyle} />;
};

export const FacebookIcon = () => {
  return <FontAwesomeIcon icon={faFacebookSquare} fixedWidth style={contactIconStyle} />;
};

export const InstagramIcon = () => {
  return <FontAwesomeIcon icon={faInstagram} fixedWidth style={contactIconStyle} />;
};

export const ImageIcon = () => {
  return <FontAwesomeIcon icon={faImage} style={imageIconStyle} fixedWidth />;
};

export const TrashIcon = () => {
  return <FontAwesomeIcon icon={faTrashAlt} fixedWidth />;
};

export const EditIcon = () => {
  return <FontAwesomeIcon icon={faPen} fixedWidth style={toggleSwitchIconStyle} />;
};

export const EyeIcon = () => {
  return <FontAwesomeIcon icon={faEye} fixedWidth style={toggleSwitchIconStyle} />;
};

export const LargeWebsiteIcon = () => {
  return (
    <FontAwesomeIcon icon={faLaptop} fixedWidth style={largeMediaIconStyle} className="link" />
  );
};

export const LargeFacebookIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faFacebookSquare}
      fixedWidth
      style={largeMediaIconStyle}
      className="link"
    />
  );
};

export const LargeInstagramIcon = () => {
  return (
    <FontAwesomeIcon icon={faInstagram} fixedWidth style={largeMediaIconStyle} className="link" />
  );
};
