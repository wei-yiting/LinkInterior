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
    <div>
      <label htmlFor={labelName}>
        <input
          id={labelName}
          name={labelName}
          type="checkbox"
          checked={isChecked}
          onChange={handleInputChange}
        />
        {labelName}
      </label>
    </div>
  );
};

export default CheckBox;
