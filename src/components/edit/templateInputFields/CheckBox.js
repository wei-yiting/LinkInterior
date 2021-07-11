import React, { useState } from 'react';

const CheckBox = ({ labelName, list, listSetter }) => {
  const checkStatus = list.includes(labelName);

  const [isChecked, setIsChecked] = useState(checkStatus);

  const handleInputChange = (evt) => {
    if (!isChecked) {
      listSetter([...list, evt.target.name]);
    }
    if (isChecked) {
      listSetter(
        list.filter((item) => {
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
          className="focus:ring-gray-500 h-4 w-4 text-gray-600 bg-white border border-gray-200 rounded"
        />
        <div className="ml-2 text-base">
          <label htmlFor={labelName}>{labelName}</label>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
