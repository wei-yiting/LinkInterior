import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import ProfileBasicInfo from './serviceInfoItems/ProfileBasicInfo';
import IntroKeywordTags from './serviceInfoItems/IntroKeywordTags';
import IntroPartialText from './serviceInfoItems/IntroPartialText';
import IntroServiceArea from './serviceInfoItems/IntroServiceArea';
import { color } from '../../styles/theme';
import { Heading1 } from '../../styles/sharedStyledComponents/headings';

const CardWrapper = styled.div`
  margin: 1rem 15px;

  @media (max-width: 900px) {
    width: 98%;
    margin: 1rem auto;
  }

  @media (max-width: 480px) {
    margin: 1rem auto;
  }
`;

const Card = styled.article`
  width: 390px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 6px ${color.gray[100]};
  padding: 2.5rem;
  flex: 0 1 auto;

  :hover {
    box-shadow: 3px 3px 6px ${color.gray[200]};
  }
  :active {
    box-shadow: 0px 0px 3px ${color.gray[100]};
  }

  @media (max-width: 1024px) {
    padding: 2.5rem 1.5rem;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 2.5rem 1.5rem;
  }
`;

export default function ServiceInfoCard({ data }) {
  return (
    <CardWrapper>
      <Link to={`/service/${data.companySeqId}`}>
        <Card>
          <ProfileBasicInfo data={data} />
          <Heading1 fontColor={color.main[600]} fontWeight="600" margin="0.75rem 0 1.25rem">
            {data.companyName}
          </Heading1>
          <IntroKeywordTags data={data} />
          <IntroPartialText data={data} />
          <IntroServiceArea data={data} />
        </Card>
      </Link>
    </CardWrapper>
  );
}
