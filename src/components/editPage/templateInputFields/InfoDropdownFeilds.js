import React, { useContext } from 'react';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';

import {
  SectionWrapper,
  DropdownContainer,
} from '../../../styles/layoutStyledComponents/TemplateLayout';
import { LocationIcon, ProfessionIcon } from '../../../utils/icons/fontAwesome';
import Dropdown from './Dropdown';
import { allCityOptions } from '../../../utils/constants/city';
import professionOptions from '../../../utils/constants/profession';

export default function InfoDropdownFields({
  flexDirection,
  alignItems,
  margin,
  justifyContent,
  dropdownWidth,
}) {
  const { city, setCity, profession, setProfession } = useContext(IntroCompileContext);

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
}
