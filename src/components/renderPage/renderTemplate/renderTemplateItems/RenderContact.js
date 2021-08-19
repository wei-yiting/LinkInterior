import React, { useContext } from 'react';

import { IntroRenderContext } from '../../../../contexts/IntroRenderContext';
import {
  SectionWrapper,
  ContactArea,
  SocailMediaContainer,
  ContactInfoWrapper,
  InfoSpan,
} from '../../../../styles/layoutStyledComponents/templateLayout';
import { Heading3 } from '../../../../styles/sharedStyledComponents/headings';
import {
  MobileIcon,
  PhoneIcon,
  LineIcon,
  EmailIcon,
  AddressIcon,
  LargeWebsiteIcon,
  LargeFacebookIcon,
  LargeInstagramIcon,
} from '../../../../utils/icons/fontAwesome';

export default function RenderContact({ width, flexDirection, margin }) {
  const { contactInfo } = useContext(IntroRenderContext);

  return (
    <SectionWrapper width={width} flex="none" margin={margin}>
      <Heading3>業者聯絡資訊</Heading3>
      <ContactArea flexDirection={flexDirection}>
        {contactInfo.website || contactInfo.fb || contactInfo.ig ? (
          <SocailMediaContainer>
            {contactInfo.website && (
              <a href={contactInfo.website} target="_blank" rel="noreferrer">
                <LargeWebsiteIcon />
              </a>
            )}
            {contactInfo.fb && (
              <a href={contactInfo.fb} target="_blank" rel="noreferrer">
                <LargeFacebookIcon />
              </a>
            )}
            {contactInfo.ig && (
              <a href={contactInfo.ig} target="_blank" rel="noreferrer">
                <LargeInstagramIcon />
              </a>
            )}
          </SocailMediaContainer>
        ) : null}
        <div>
          {contactInfo.mobile && (
            <ContactInfoWrapper>
              <MobileIcon />
              <InfoSpan>{contactInfo.mobile}</InfoSpan>
            </ContactInfoWrapper>
          )}
          {contactInfo.phone && (
            <ContactInfoWrapper>
              <PhoneIcon />
              <InfoSpan>{contactInfo.phone}</InfoSpan>
            </ContactInfoWrapper>
          )}
        </div>
        <div>
          {contactInfo.line && (
            <ContactInfoWrapper>
              <LineIcon />
              <InfoSpan>{contactInfo.line}</InfoSpan>
            </ContactInfoWrapper>
          )}
          {contactInfo.email && (
            <ContactInfoWrapper>
              <EmailIcon />
              <InfoSpan>{contactInfo.email}</InfoSpan>
            </ContactInfoWrapper>
          )}
          {contactInfo.address && (
            <ContactInfoWrapper>
              <AddressIcon />
              <InfoSpan>{contactInfo.address}</InfoSpan>
            </ContactInfoWrapper>
          )}
        </div>
      </ContactArea>
    </SectionWrapper>
  );
}
