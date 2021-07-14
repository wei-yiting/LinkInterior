import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { color } from '../../styles/theme';
import ProgressBar from './ProgressBar';

const UploadArea = styled.form`
  /* margin: 30px auto 10px; */
  text-align: center;
`;
const FileInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

const InputLabel = styled.label`
  display: block;
  width: fit-content;
  height: 100%;
  /* background: ${color.main[500]}; */

  /* border: 1px solid ${color.main[500]};
  border-radius: 50%;
  margin: 10px auto;
  /* line-height: 30px; */
  /* color: ${color.main[500]}; */
  /* font-weight: bold;
  font-size: 24px; */ */

  /* :hover {
    color: white;
  }*/
`;

const Output = styled.div`
  /* height: 60px; */
  font-size: 0.8rem;
`;

const Error = styled.div`
  color: ${color.main[500]};
`;

const allowedFileType = ['image/png', 'image/jpeg'];

const UploadImageForm = ({ children, url, setUrl }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && allowedFileType.includes(selectedFile.type)) {
      setImage(selectedFile);
      setError('');
    } else {
      setImage(null);
      setError('請選擇一個圖檔 ( jpeg 或 png 檔 )');
    }
  };

  return (
    <UploadArea>
      <InputLabel>
        <FileInput type="file" onChange={handleInputChange} />
        {children}
      </InputLabel>
      <Output>
        {error && <Error>{error}</Error>}
        {image && <div>{image.name}</div>}
        {image && <ProgressBar image={image} setImage={setImage} url={url} setUrl={setUrl} />}
      </Output>
    </UploadArea>
  );
};

export default UploadImageForm;
