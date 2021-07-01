import React from 'react';

const IntroParagraph = ({ title, intro }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{intro}</p>
    </div>
  );
};

export default IntroParagraph;
