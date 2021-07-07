import React from 'react';

import { SectionWrapper, DropdownContainer } from '../../../styles/layout/TemplateLayout';
import { LocationIcon, ProfessionIcon } from '../../../utils/icons';
import Dropdown from '../../../styles/TailwindUI/Dropdown';
import { allCityOptions } from '../../../utils/data/city';
import professionOptions from '../../../utils/data/profession';

const InfoDropdownFields = ({ city, setCity, profession, setProfession, flexDirection }) => {
  return (
    <SectionWrapper flexDirection={flexDirection}>
      <DropdownContainer>
        <LocationIcon />
        <Dropdown placeholder="縣市" options={allCityOptions} value={city} setValue={setCity} />
      </DropdownContainer>
      <DropdownContainer>
        <ProfessionIcon />
        <Dropdown
          placeholder="專長"
          options={professionOptions}
          value={profession}
          setValue={setProfession}
        />
      </DropdownContainer>
    </SectionWrapper>
  );
};

export default InfoDropdownFields;
