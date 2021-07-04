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
} from '@fortawesome/free-solid-svg-icons';

import { faLine, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const LocationIcon = () => {
  return <FontAwesomeIcon icon={faMapMarkerAlt} />;
};

export const ProfessionIcon = () => {
  return <FontAwesomeIcon icon={faBriefcase} />;
};

export const CloseIcon = () => {
  return <FontAwesomeIcon icon={faTimes} />;
};

export const AddIcon = () => {
  return <FontAwesomeIcon icon={faPlus} />;
};

export const MobileIcon = () => {
  return <FontAwesomeIcon icon={faMobileAlt} />;
};

export const PhoneIcon = () => {
  return <FontAwesomeIcon icon={faPhoneAlt} />;
};

export const LineIcon = () => {
  return <FontAwesomeIcon icon={faLine} />;
};

export const EmailIcon = () => {
  return <FontAwesomeIcon icon={faEnvelope} />;
};

export const AddressIcon = () => {
  return <FontAwesomeIcon icon={faHome} />;
};

export const WebsiteIcon = () => {
  return <FontAwesomeIcon icon={faLaptop} />;
};

export const FacebookIcon = () => {
  return <FontAwesomeIcon icon={faFacebookSquare} />;
};

export const InstagramIcon = () => {
  return <FontAwesomeIcon icon={faInstagram} />;
};

export const ImageIcon = () => {
  return <FontAwesomeIcon icon={faImage} style={{ color: '#bbb', fontSize: '3rem' }} />;
};

export const TrashIcon = () => {
  return <FontAwesomeIcon icon={faTrashAlt} />;
};
