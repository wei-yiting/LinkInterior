import React from 'react';

const shape1style = {
  fill: '#9ca3af',
  opacity: '0.65',
};

const shape2style = {
  fill: '#6cacbb',
  opacity: '0.65',
};

const Logo = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221.73 221.73">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path
              style={shape1style}
              d="M153.7,110.86,43,221.73H193.86a27.87,27.87,0,0,0,27.87-27.87v-166A27.87,27.87,0,0,0,193.86,0H43Z"
            />
            <path
              style={shape2style}
              d="M68,110.86,178.75,0H27.87A27.87,27.87,0,0,0,0,27.87v166a27.87,27.87,0,0,0,27.87,27.87H178.75Z"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default Logo;
