import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { color } from '../../styles/theme';
import ProgressBar from './ProgressBar';

const UploadArea = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: auto;
`;

const Output = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
  text-align: center;
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
      <Output>
        {error && <Error>{error}</Error>}
        {image && <div>{image.name}</div>}
        {image && <ProgressBar image={image} setImage={setImage} url={url} setUrl={setUrl} />}
      </Output>
      <InputLabel>
        <FileInput type="file" onChange={handleInputChange} />
        {children}
      </InputLabel>
    </UploadArea>
  );
};

export default UploadImageForm;
