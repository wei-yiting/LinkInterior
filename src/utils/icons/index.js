import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

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
