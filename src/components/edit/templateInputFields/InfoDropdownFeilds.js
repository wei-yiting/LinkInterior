import React from 'react';

import { SectionWrapper, DropdownContainer } from '../../../styles/layout/TemplateLayout';
import { LocationIcon, ProfessionIcon } from '../../../utils/icons';
import Dropdown from './Dropdown';
import { allCityOptions } from '../../../utils/constants/city';
import professionOptions from '../../../utils/constants/profession';

const InfoDropdownFields = ({
  city,
  setCity,
  profession,
  setProfession,
  flexDirection,
  alignItems,
  margin,
  justifyContent,
  dropdownWidth,
}) => {
  return (
    <SectionWrapper flexDirection={flexDirection} alignItems={alignItems} margin={margin}>
      <DropdownContainer justifyContent={justifyContent}>
        <LocationIcon />
        <div style={{ width: dropdownWidth }}>
          <Dropdown placeholder="縣市" options={allCityOptions} value={city} setValue={setCity} />
        </div>
      </DropdownContainer>
      <DropdownContainer justifyContent={justifyContent}>
        <ProfessionIcon />
        <div style={{ width: dropdownWidth }}>
          <Dropdown
            placeholder="專長"
            options={professionOptions}
            value={profession}
            setValue={setProfession}
          />
        </div>
      </DropdownContainer>
    </SectionWrapper>
  );
};

export default InfoDropdownFields;
