import React from 'react';

import './ToggleSwitch.css';

const ToggleSwitch = ({ isEdit, setIsEdit }) => {
  return (
    <div>
      <label htmlFor="toggle" className="switch">
        <input id="toggle" type="checkbox" checked={!isEdit} onChange={() => setIsEdit(!isEdit)} />
        <span className="slider round" />
      </label>
      {/* <FontAwesomeIcon icon={faEdit} />
            <FontAwesomeIcon icon={faEye}/> */}
    </div>
  );
};

export default ToggleSwitch;
