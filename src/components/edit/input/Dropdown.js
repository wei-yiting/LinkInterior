import React from 'react';

const Dropdown = ({ placeholder, options, value, setValue }) => {
  const renderedOptions = options.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });
  renderedOptions.unshift(
    <option key="0" value="">
      {placeholder}
    </option>,
  );

  return (
    <div>
      <select
        name="pets"
        id="pet-select"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {renderedOptions}
      </select>
    </div>
  );
};

export default Dropdown;
