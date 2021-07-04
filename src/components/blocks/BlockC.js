import React, { useState, useEffect } from 'react';

import EditBlockC from '../edit/EditBlockC';
import PreviewBlockC from '../preview/PreviewBlockC';
import { lightLinearGradients } from '../../utils/data/linearGradient';

const BlockC = ({ isEdit, blockList, setBlockList, blockIdx, blockContent }) => {
  const [randomBgIdx, setRandomBgIdx] = useState(0);

  useEffect(() => {
    setRandomBgIdx(Math.floor(Math.random() * lightLinearGradients.length));
  }, []);

  return isEdit ? (
    <EditBlockC
      blockList={blockList}
      setBlockList={setBlockList}
      blockIdx={blockIdx}
      randomBgIdx={randomBgIdx}
    />
  ) : (
    <PreviewBlockC blockContent={blockContent} randomBgIdx={randomBgIdx} />
  );
};

export default BlockC;
