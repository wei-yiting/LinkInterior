import React from 'react';
import styled from 'styled-components/macro';

import { OverviewLocationIcon, OverviewProfessionIcon } from '../../../utils/icons';
import { color } from '../../../styles/theme';

const iconStyle = {
  color: color.gray[400],
  width: '1.125rem',
  heigth: '1.125rem',
  marginRight: '0.6rem',
};

const ProfileWrapper = styled.div`
  display: flex;
`;

const ProfileImage = styled.div`
  width: 50%;
  height: 150px;
  background-image: url('${({ image }) => image}');
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0 0 1.5rem 2rem;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const InfoText = styled.p`
  font-size: 1.0875rem;
  letter-spacing: 0.05em;
`;

const profileUrl =
  'https://firebasestorage.googleapis.com/v0/b/linkinterior-450c8.appspot.com/o/userProfile%2F%2BC5rEcU7R52Qq5h1gQkKJw.jpg?alt=media&token=5d5da0d2-bed9-4db0-adf5-c5820bc45afb';
const location = '臺中市';
const profession = '室內設計';

export default function ProfileBasicInfo() {
  return (
    <ProfileWrapper>
      <ProfileImage image={profileUrl} />
      <BasicInfoWrapper>
        <RowWrapper>
          <OverviewLocationIcon style={iconStyle} />
          <InfoText>{location}</InfoText>
        </RowWrapper>
        <RowWrapper>
          <OverviewProfessionIcon style={iconStyle} />
          <InfoText>{profession}</InfoText>
        </RowWrapper>
      </BasicInfoWrapper>
    </ProfileWrapper>
  );
}
