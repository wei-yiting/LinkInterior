import React, { useState, useContext } from 'react';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';

export default function CheckBox({ labelName }) {
  const { selectedServiceCities, setSelectedServiceCities } = useContext(IntroCompileContext);
  const checkStatus = selectedServiceCities.includes(labelName);
  const [isChecked, setIsChecked] = useState(checkStatus);

  const handleInputChange = (evt) => {
    if (!isChecked) {
      setSelectedServiceCities([...selectedServiceCities, evt.target.name]);
    }
    if (isChecked) {
      setSelectedServiceCities(
        selectedServiceCities.filter((item) => {
          return item !== evt.target.name;
        }),
      );
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className="relative flex items-start mr-4 mb-3">
      <div className="flex items-center h-5">
        <input
          id={labelName}
          name={labelName}
          type="checkbox"
          checked={isChecked}
          onChange={handleInputChange}
          className="focus:ring-main-400 h-4 w-4 text-main-500 bg-white border border-gray-200 rounded"
        />
        <div className="ml-2 text-base">
          <label htmlFor={labelName}>{labelName}</label>
        </div>
      </div>
    </div>
  );
}
