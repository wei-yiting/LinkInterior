import React from 'react';
import styled from 'styled-components/macro';

const Switch = styled.label`
  position: fixed;
  top: 20px;
  right: 20px;
  display: inline-block;
  width: 60px;
  height: 34px;
  z-index: 10;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + span {
    background-color: #2196f3;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }

  :focus + span {
    box-shadow: 0 0 1px #2196f3;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }

  :checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

  :before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ToggleSwitch = ({ isEdit, setIsEdit }) => {
  return (
    <div>
      <Switch htmlFor="toggle">
        <SwitchInput
          id="toggle"
          type="checkbox"
          checked={!isEdit}
          onChange={() => setIsEdit(!isEdit)}
        />
        <Slider />
      </Switch>
      {/* <FontAwesomeIcon icon={faEdit} />
            <FontAwesomeIcon icon={faEye}/> */}
    </div>
  );
};

export default ToggleSwitch;
