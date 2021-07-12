import React from 'react';
import styled from 'styled-components/macro';

import { SectionWrapper, ContactArea } from '../../../styles/layout/TemplateLayout';

import {
  MobileIcon,
  PhoneIcon,
  LineIcon,
  EmailIcon,
  AddressIcon,
  WebsiteIcon,
  FacebookIcon,
  InstagramIcon,
} from '../../../utils/icons';

const ContactInfoWrapper = styled.div``;
const InfoSpan = styled.span``;
const SocailMediaContainer = styled.div``;

const addHttp = (url) => {
  if (!url.startsWith('http')) {
    return `http://${url}`;
  }
  return url;
};

const ContactInfoArea = ({ contactInfo }) => {
  return (
    <SectionWrapper width="55%" flex="none" margin="30px 0">
      <h5>業者聯絡資訊</h5>
      <ContactArea>
        {contactInfo.website || contactInfo.fb || contactInfo.ig ? (
          <SocailMediaContainer>
            {contactInfo.website ? (
              <a href={addHttp(contactInfo.website)}>
                <WebsiteIcon />
              </a>
            ) : null}
            {contactInfo.fb ? (
              <a href={addHttp(contactInfo.fb)}>
                <FacebookIcon />
              </a>
            ) : null}
            {contactInfo.ig ? (
              <a href={addHttp(contactInfo.ig)}>
                <InstagramIcon />
              </a>
            ) : null}
          </SocailMediaContainer>
        ) : null}
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
      </ContactArea>
    </SectionWrapper>
  );
};

export default ContactInfoArea;
