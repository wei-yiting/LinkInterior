import React from 'react';
import styled from 'styled-components';

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

const ContactInfoContainer = styled.div``;
const InfoSpan = styled.span``;

const ContactInfoArea = ({ contactInfo }) => {
  return (
    <div>
      {contactInfo.mobile ? (
        <ContactInfoContainer>
          <MobileIcon />
          <InfoSpan>{contactInfo.mobile}</InfoSpan>
        </ContactInfoContainer>
      ) : null}
      {contactInfo.phone ? (
        <ContactInfoContainer>
          <PhoneIcon />
          <InfoSpan>{contactInfo.phone}</InfoSpan>
        </ContactInfoContainer>
      ) : null}
      {contactInfo.line ? (
        <ContactInfoContainer>
          <LineIcon />
          <InfoSpan>{contactInfo.line}</InfoSpan>
        </ContactInfoContainer>
      ) : null}
      {contactInfo.email ? (
        <ContactInfoContainer>
          <EmailIcon />
          <InfoSpan>{contactInfo.email}</InfoSpan>
        </ContactInfoContainer>
      ) : null}
      {contactInfo.address ? (
        <ContactInfoContainer>
          <AddressIcon />
          <InfoSpan>{contactInfo.address}</InfoSpan>
        </ContactInfoContainer>
      ) : null}
      {contactInfo.website ? (
        <ContactInfoContainer>
          <WebsiteIcon />
          <InfoSpan>{contactInfo.website}</InfoSpan>
        </ContactInfoContainer>
      ) : null}
      {contactInfo.fb ? (
        <ContactInfoContainer>
          <FacebookIcon />
          <InfoSpan>{contactInfo.fb}</InfoSpan>
        </ContactInfoContainer>
      ) : null}
      {contactInfo.ig ? (
        <ContactInfoContainer>
          <InstagramIcon />
          <InfoSpan>{contactInfo.ig}</InfoSpan>
        </ContactInfoContainer>
      ) : null}
    </div>
  );
};

export default ContactInfoArea;
