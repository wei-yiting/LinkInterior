import React, { useState, useContext } from 'react';
import styled from 'styled-components/macro';
import uuid from 'react-uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { IntroRenderContext } from '../../../../contexts/IntroRenderContext';
import { color } from '../../../../styles/theme';
import '../../../../styles/css/slider.css';

const SwiperContainer = styled.section`
  background-color: ${color.gray[100]};
  padding: 1rem 2rem;
  border-radius: 5px;
`;

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function ImagesSlider() {
  const { imageGalleryUrls } = useContext(IntroRenderContext);
  const setSwiperRef = useState(null)[1];

  const renderedImageSlides = imageGalleryUrls.map((imageUrl) => (
    <SwiperSlide key={uuid()}>
      <img src={imageUrl} alt="圖片" />
    </SwiperSlide>
  ));

  return imageGalleryUrls.length ? (
    <SwiperContainer style={{ margin: '50px auto 30px', width: '90%' }}>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation
        className="mySwiper"
      >
        {renderedImageSlides}
      </Swiper>
    </SwiperContainer>
  ) : null;
}
