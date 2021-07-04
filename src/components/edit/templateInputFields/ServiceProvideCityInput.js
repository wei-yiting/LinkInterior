import React from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';

import CheckBox from './CheckBox';
import {
  northernCities,
  centralCities,
  southernCities,
  easternCities,
  islands,
} from '../../../utils/data/city';

const CityCheckBoxContainer = styled.div`
  width: fit-content;
  border: 1px solid grey;
  padding: 1rem;
`;

const Region = styled.div`
  display: flex;
`;
const RegionName = styled.span`
  font-weight: 600;
`;
const Cities = styled.div`
  display: flex;
`;

const ServiceProvideCityInput = ({ selectedServiceCities, setSelectedServiceCities }) => {
  const northrenCitiesCheckbox = northernCities.map((city) => {
    return (
      <CheckBox
        key={uuid()}
        labelName={city}
        list={selectedServiceCities}
        listSetter={setSelectedServiceCities}
      />
    );
  });

  const centralCitiesCheckbox = centralCities.map((city) => {
    return (
      <CheckBox
        key={uuid()}
        labelName={city}
        list={selectedServiceCities}
        listSetter={setSelectedServiceCities}
      />
    );
  });

  const southernCitiesCheckbox = southernCities.map((city) => {
    return (
      <CheckBox
        key={uuid()}
        labelName={city}
        list={selectedServiceCities}
        listSetter={setSelectedServiceCities}
      />
    );
  });

  const easternCitiesCheckbox = easternCities.map((city) => {
    return (
      <CheckBox
        key={uuid()}
        labelName={city}
        list={selectedServiceCities}
        listSetter={setSelectedServiceCities}
      />
    );
  });

  const islandsCheckbox = islands.map((city) => {
    return (
      <CheckBox
        key={uuid()}
        labelName={city}
        list={selectedServiceCities}
        listSetter={setSelectedServiceCities}
      />
    );
  });

  return (
    <div>
      <h5>我的服務地區</h5>
      <CityCheckBoxContainer>
        <Region>
          <RegionName>北部</RegionName>
          <Cities>{northrenCitiesCheckbox}</Cities>
        </Region>
        <Region>
          <RegionName>中部</RegionName>
          <Cities>{centralCitiesCheckbox}</Cities>
        </Region>
        <Region>
          <RegionName>南部</RegionName>
          <Cities>{southernCitiesCheckbox}</Cities>
        </Region>
        <Region>
          <RegionName>東部</RegionName>
          <Cities>{easternCitiesCheckbox}</Cities>
        </Region>
        <Region>
          <RegionName>南部</RegionName>
          <Cities>{islandsCheckbox}</Cities>
        </Region>
      </CityCheckBoxContainer>
    </div>
  );
};

export default ServiceProvideCityInput;
