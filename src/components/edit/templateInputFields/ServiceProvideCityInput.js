import React from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components/macro';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import CheckBox from './CheckBox';
import {
  northernCities,
  centralCities,
  southernCities,
  easternCities,
  islands,
} from '../../../utils/data/city';
import { inputField } from '../../../styles/theme';

const AllCheckBoxesArea = styled.div`
  width: fit-content;
  border-radius: ${inputField.borderRadius};
  padding: 1rem;
  background-color: white;
`;

const Region = styled.div``;
const CheckboxesContainer = styled.div``;
const RegionName = styled.div``;
const Cities = styled.div``;

const renderedRegionCheckBoxes = (regionName, regionCities, list, listSetter) => {
  const citiesCheckBoxes = regionCities.map((city) => (
    <CheckBox key={uuid()} labelName={city} list={list} listSetter={listSetter} />
  ));

  return (
    <Region className="flex flex-col w-full border-b border-gray-100 last:border-0 pb-2 mb-4">
      <RegionName className="text-lg tracking-wider text-gray-500 mb-3 font-medium">
        {regionName}
      </RegionName>
      <CheckboxesContainer className="flex">
        <Cities className="flex flex-wrap">{citiesCheckBoxes}</Cities>
      </CheckboxesContainer>
    </Region>
  );
};

const ServiceProvideCityInput = ({ selectedServiceCities, setSelectedServiceCities }) => {
  const northrenCityCheckboxes = renderedRegionCheckBoxes(
    '北部',
    northernCities,
    selectedServiceCities,
    setSelectedServiceCities,
  );

  const centralCityCheckboxes = renderedRegionCheckBoxes(
    '中部',
    centralCities,
    selectedServiceCities,
    setSelectedServiceCities,
  );

  const southernCityCheckboxes = renderedRegionCheckBoxes(
    '南部',
    southernCities,
    selectedServiceCities,
    setSelectedServiceCities,
  );

  const easternCityCheckboxes = renderedRegionCheckBoxes(
    '東部',
    easternCities,
    selectedServiceCities,
    setSelectedServiceCities,
  );

  const islandCheckboxes = renderedRegionCheckBoxes(
    '離島',
    islands,
    selectedServiceCities,
    setSelectedServiceCities,
  );

  return (
    <SectionWrapper width="40%" flex="none" margin="30px 0">
      <h5>我的服務地區</h5>
      <AllCheckBoxesArea className="shadow-sm">
        {northrenCityCheckboxes}
        {centralCityCheckboxes}
        {southernCityCheckboxes}
        {easternCityCheckboxes}
        {islandCheckboxes}
      </AllCheckBoxesArea>
    </SectionWrapper>
  );
};

export default ServiceProvideCityInput;
