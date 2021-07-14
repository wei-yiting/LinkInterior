import React from 'react';

const shape1style = {
  fill: '#2f575e',
};

const shape2style = {
  fill: '#bbbec5',
};

const shape3style = {
  fill: '#778489',
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
            <polygon
              style={shape3style}
              points="155.9 113.74 113.72 113.72 113.74 155.9 155.9 113.74"
            />
            <polygon style={shape3style} points="61.4 61.4 61.38 19.22 19.22 61.38 61.4 61.4" />
          </g>
        </g>
      </svg>
    </>
  );
};

export default Logo;
