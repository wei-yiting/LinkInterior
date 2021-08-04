/* This example requires Tailwind CSS v2.0+ */
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { Switch } from '@headlessui/react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import { EditIcon, EyeIcon } from '../../utils/icons/fontAwesome';

const SwitchContainer = styled.label`
  position: fixed;
  top: 100px;
  right: 10vw;
  width: 60px;
  height: 34px;
  z-index: 10;
  transform: scale(1.75);
`;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const { isEditMode, setIsEditMode } = useContext(IntroCompileContext);

  return (
    <SwitchContainer>
      <Switch
        checked={!isEditMode}
        onChange={() => {
          setIsEditMode(!isEditMode);
        }}
        className={classNames(
          !isEditMode ? 'bg-main-300' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h- w-11 border border-main-300 rounded-full cursor-pointer transition-colors ease-in-out duration-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-main-100 shadow-xl',
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={classNames(
            !isEditMode ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-500',
          )}
        >
          <span
            className={classNames(
              !isEditMode ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-300',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
            )}
            aria-hidden="true"
          >
            <EditIcon />
          </span>
          <span
            className={classNames(
              !isEditMode ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-300',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
            )}
            aria-hidden="true"
          >
            <EyeIcon />
          </span>
        </span>
      </Switch>
    </SwitchContainer>
  );
}
