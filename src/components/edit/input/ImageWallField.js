import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 800px;
  height: 300px;
  background-size: cover;
  background-position: center;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageWallField = () => {
  //   const [selectedImages, setSelectedImages] = useState(null);
  //   const [imagesUrls, setImagesUrls] = useState([]);

  return (
    <div>
      <ImageContainer>
        <input type="file" multiple />
        <button type="button">上傳圖片</button>
      </ImageContainer>
    </div>
  );
};

export default ImageWallField;
