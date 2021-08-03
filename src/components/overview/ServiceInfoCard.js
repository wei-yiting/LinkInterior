import React from 'react';
import styled from 'styled-components/macro';

import ProfileBasicInfo from './serviceInfoItems/ProfileBasicInfo';
import IntroKeywordTags from './serviceInfoItems/IntroKeywordTags';
import IntroPartialText from './serviceInfoItems/IntroPartialText';
import IntroServiceArea from './serviceInfoItems/IntroServiceArea';
import { color } from '../../styles/theme';
import { Heading1 } from '../../styles/sharedStyledComponents/headings';

const CardContainer = styled.article`
  width: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 6px ${color.gray[100]};
  padding: 2.5rem;

  :hover {
    box-shadow: 3px 3px 6px ${color.gray[200]};
  }
  :active {
    box-shadow: 0px 0px 3px ${color.gray[100]};
  }
`;

export default function ServiceInfoCard() {
  const companyName = '蘇氏修繕';

  return (
    <CardContainer>
      <ProfileBasicInfo />
      <Heading1 fontColor={color.main[600]} fontWeight="600" margin="0.75rem 0 1.25rem">
        {companyName}
      </Heading1>
      <IntroKeywordTags />
      <IntroPartialText />
      <IntroServiceArea />
    </CardContainer>
  );
}
