import React, { useEffect } from 'react';

const Intro = ({ title, intro, setIntro }) => {
  useEffect(() => {
    console.log(intro);
  }, [intro]);

  return (
    <div>
      <h4>{title}</h4>
      <textarea
        id="story"
        rows="8"
        cols="100"
        style={{ resize: 'none', width: '75%', padding: '10px' }}
        value={intro}
        onChange={(e) => {
          setIntro(e.target.value);
        }}
        placeholder="請填入您的介紹"
      />
    </div>
  );
};

export default Intro;
