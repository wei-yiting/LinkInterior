import React from 'react';

const shape1style = {
  fill: '#6cacbb',
  opacity: '0.9',
};

const shape2style = {
  fill: '#9ca3af',
  opacity: '0.75',
};

const Logo = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.12 175.12">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path
              style={shape1style}
              d="M61.44,113.69l-.06-94.47L4.92,75.68a16.8,16.8,0,0,0,0,23.76L75.68,170.2a16.8,16.8,0,0,0,23.76,0l56.46-56.46Z"
            />
            <path
              style={shape2style}
              d="M113.69,61.44l0,94.46L170.2,99.44a16.8,16.8,0,0,0,0-23.76L99.44,4.92a16.8,16.8,0,0,0-23.76,0L19.22,61.38Z"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default Logo;
