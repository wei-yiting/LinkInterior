import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { color } from '../../styles/theme';

const UploadArea = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;
const FileInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  position: absolute;
`;

const InputLabel = styled.label`
  display: block;
  width: fit-content;
  height: auto;
`;

const Output = styled.div`
  margin: 1rem 0;
  font-size: 0.8rem;
  text-align: center;
`;

const Error = styled.div`
  color: ${color.main[500]};
`;

const allowedFileType = ['image/png', 'image/jpeg', 'image/jpg'];

const UploadImageForm = ({ children, setUrl, setProfileLoaded, setImage }) => {
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setProfileLoaded(false);
    const selectedFile = e.target.files[0];
    if (selectedFile && allowedFileType.includes(selectedFile.type)) {
      setImage(selectedFile);
      setError('');
      const localUrl = URL.createObjectURL(selectedFile);
      setUrl(localUrl);
    } else {
      setImage(null);
      setError('請選擇一個圖檔 ( jpeg 或 png 檔 )');
    }
  };

  return (
    <UploadArea>
      <Output>{error && <Error>{error}</Error>}</Output>
      <InputLabel>
        <FileInput type="file" onChange={handleInputChange} accept=".jpg, .png, .jpeg" />
        {children}
      </InputLabel>
    </UploadArea>
  );
};

export default UploadImageForm;
