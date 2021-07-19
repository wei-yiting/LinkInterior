import React, { useState, useEffect } from 'react';

import EditBlockB from '../edit/EditBlockB';
import PreviewBlockB from '../preview/PreviewBlockB';
import { lightLinearGradients } from '../../utils/constants/linearGradient';

const BlockB = ({ isEdit, blockList, setBlockList, blockIdx, blockContent }) => {
  const [randomBgIdx, setRandomBgIdx] = useState(0);

  useEffect(() => {
    setRandomBgIdx(Math.floor(Math.random() * lightLinearGradients.length));
  }, []);

  return isEdit ? (
    <EditBlockB
      blockList={blockList}
      setBlockList={setBlockList}
      blockIdx={blockIdx}
      randomBgIdx={randomBgIdx}
    />
  ) : (
    <PreviewBlockB blockContent={blockContent} randomBgIdx={randomBgIdx} />
  );
};

export default BlockB;
