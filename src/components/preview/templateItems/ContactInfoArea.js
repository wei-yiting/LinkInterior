import React from 'react';
import styled from 'styled-components/macro';

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

const ContactInfosArea = styled.div`
  background-color: #eee;
`;
const ContactInfoWrapper = styled.div``;
const InfoSpan = styled.span``;
const SocailMediaContainer = styled.div``;

const ContactInfoArea = ({ contactInfo }) => {
  return (
    <>
      <h5>業者聯絡資訊</h5>
      <ContactInfosArea>
        {contactInfo.website || contactInfo.fb || contactInfo.ig ? (
          <SocailMediaContainer>
            {contactInfo.website ? (
              <a href={contactInfo.website}>
                <WebsiteIcon />
              </a>
            ) : null}
            {contactInfo.fb ? (
              <a href={contactInfo.fb}>
                <FacebookIcon />
              </a>
            ) : null}
            {contactInfo.ig ? (
              <a href={contactInfo.ig}>
                <InstagramIcon />
              </a>
            ) : null}
          </SocailMediaContainer>
        ) : null}
        {contactInfo.mobile ? (
          <ContactInfoWrapper>
            <MobileIcon />
            <InfoSpan>{contactInfo.mobile}</InfoSpan>
          </ContactInfoWrapper>
        ) : null}
        {contactInfo.phone ? (
          <ContactInfoWrapper>
            <PhoneIcon />
            <InfoSpan>{contactInfo.phone}</InfoSpan>
          </ContactInfoWrapper>
        ) : null}
        {contactInfo.line ? (
          <ContactInfoWrapper>
            <LineIcon />
            <InfoSpan>{contactInfo.line}</InfoSpan>
          </ContactInfoWrapper>
        ) : null}
        {contactInfo.email ? (
          <ContactInfoWrapper>
            <EmailIcon />
            <InfoSpan>{contactInfo.email}</InfoSpan>
          </ContactInfoWrapper>
        ) : null}
        {contactInfo.address ? (
          <ContactInfoWrapper>
            <AddressIcon />
            <InfoSpan>{contactInfo.address}</InfoSpan>
          </ContactInfoWrapper>
        ) : null}
      </ContactInfosArea>
    </>
  );
};

export default ContactInfoArea;
