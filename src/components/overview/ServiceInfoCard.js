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
  margin: 2rem 20px;
`;

const Card = styled.article`
  width: 400px;
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
