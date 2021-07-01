import React from 'react';

const TagArea = ({ title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <ul>
          <li>
            <span>Tag1</span>
          </li>
          <li>Tag2</li>
        </ul>
      </div>
    </div>
  );
};

export default TagArea;

// value = {intro}
// onChange = {(e)=>{setIntro(e.target.value)}}
