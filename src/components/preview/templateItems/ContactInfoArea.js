import React from 'react';
import styled from 'styled-components/macro';

import { SectionWrapper, ContactArea } from '../../../styles/layout/TemplateLayout';
import { Heading3 } from '../../../styles/sharedStyledComponents/headings';
import {
  MobileIcon,
  PhoneIcon,
  LineIcon,
  EmailIcon,
  AddressIcon,
  LargeWebsiteIcon,
  LargeFacebookIcon,
  LargeInstagramIcon,
} from '../../../utils/icons';

const ContactInfoWrapper = styled.div``;
const InfoSpan = styled.span``;
const SocailMediaContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const addHttp = (url) => {
  if (!url.startsWith('http')) {
    return `http://${url}`;
  }
  return url;
};

const ContactInfoArea = ({ contactInfo, width, flexDirection, margin }) => {
  return (
    <SectionWrapper width={width} flex="none" margin={margin}>
      <Heading3>業者聯絡資訊</Heading3>
      <ContactArea flexDirection={flexDirection}>
        {contactInfo.website || contactInfo.fb || contactInfo.ig ? (
          <SocailMediaContainer>
            {contactInfo.website ? (
              <a href={addHttp(contactInfo.website)} target="_blank" rel="noreferrer">
                <LargeWebsiteIcon />
              </a>
            ) : null}
            {contactInfo.fb ? (
              <a href={addHttp(contactInfo.fb)} target="_blank" rel="noreferrer">
                <LargeFacebookIcon />
              </a>
            ) : null}
            {contactInfo.ig ? (
              <a href={addHttp(contactInfo.ig)} target="_blank" rel="noreferrer">
                <LargeInstagramIcon />
              </a>
            ) : null}
          </SocailMediaContainer>
        ) : null}
        <div>
          {contactInfo.mobile ? (
            <ContactInfoWrapper className="mb-5">
              <MobileIcon />
              <InfoSpan className="ml-2">{contactInfo.mobile}</InfoSpan>
            </ContactInfoWrapper>
          ) : null}
          {contactInfo.phone ? (
            <ContactInfoWrapper className="mb-5">
              <PhoneIcon />
              <InfoSpan className="ml-2">{contactInfo.phone}</InfoSpan>
            </ContactInfoWrapper>
          ) : null}
        </div>
        <div>
          {contactInfo.line ? (
            <ContactInfoWrapper className="mb-5">
              <LineIcon />
              <InfoSpan className="ml-2">{contactInfo.line}</InfoSpan>
            </ContactInfoWrapper>
          ) : null}
          {contactInfo.email ? (
            <ContactInfoWrapper className="mb-5">
              <EmailIcon />
              <InfoSpan className="ml-2">{contactInfo.email}</InfoSpan>
            </ContactInfoWrapper>
          ) : null}
          {contactInfo.address ? (
            <ContactInfoWrapper className="mb-5">
              <AddressIcon />
              <InfoSpan className="ml-2">{contactInfo.address}</InfoSpan>
            </ContactInfoWrapper>
          ) : null}
        </div>
      </ContactArea>
    </SectionWrapper>
  );
};

export default ContactInfoArea;
