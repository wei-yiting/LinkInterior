import React from 'react';

const shape1style = {
  fill: '#2f575e',
};

const shape2style = {
  fill: '#9ca3af',
  opacity: '0.65',
};

const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.98 175.98">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_2-2" data-name="Layer 2">
          <path
            style={shape1style}
            d="M62,114.34V19.48L4.62,76.84a15.76,15.76,0,0,0,0,22.3l72.22,72.22a15.76,15.76,0,0,0,22.3,0l57-57Z"
          />
          <path
            style={shape2style}
            d="M171.36,76.84,99.14,4.62a15.76,15.76,0,0,0-22.3,0L4.62,76.84a15.76,15.76,0,0,0,0,22.3L22,116.54,88,45.86,114,73V156.5l57.36-57.36A15.76,15.76,0,0,0,171.36,76.84Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
