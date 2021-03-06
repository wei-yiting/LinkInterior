import React, { useContext } from 'react';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import addHttp from '../../../utils/functions/urlProcess';
import {
  SectionWrapper,
  ContactArea,
  SocailMediaContainer,
  ContactInfoWrapper,
  InfoSpan,
} from '../../../styles/layoutStyledComponents/templateLayout';
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
} from '../../../utils/icons/fontAwesome';

export default function ContactInfoArea({ width, flexDirection, margin }) {
  const { contactInfo } = useContext(IntroCompileContext);

  return (
    <SectionWrapper width={width} flex="none" margin={margin}>
      <Heading3>業者聯絡資訊</Heading3>
      <ContactArea flexDirection={flexDirection}>
        {contactInfo.website || contactInfo.fb || contactInfo.ig ? (
          <SocailMediaContainer>
            {contactInfo.website && (
              <a href={addHttp(contactInfo.website)} target="_blank" rel="noreferrer">
                <LargeWebsiteIcon />
              </a>
            )}
            {contactInfo.fb && (
              <a href={addHttp(contactInfo.fb)} target="_blank" rel="noreferrer">
                <LargeFacebookIcon />
              </a>
            )}
            {contactInfo.ig && (
              <a href={addHttp(contactInfo.ig)} target="_blank" rel="noreferrer">
                <LargeInstagramIcon />
              </a>
            )}
          </SocailMediaContainer>
        ) : null}
        <div>
          {contactInfo.mobile && (
            <ContactInfoWrapper className="mb-5">
              <MobileIcon />
              <InfoSpan className="ml-2">{contactInfo.mobile}</InfoSpan>
            </ContactInfoWrapper>
          )}
          {contactInfo.phone && (
            <ContactInfoWrapper className="mb-5">
              <PhoneIcon />
              <InfoSpan className="ml-2">{contactInfo.phone}</InfoSpan>
            </ContactInfoWrapper>
          )}
        </div>
        <div>
          {contactInfo.line && (
            <ContactInfoWrapper className="mb-5">
              <LineIcon />
              <InfoSpan className="ml-2">{contactInfo.line}</InfoSpan>
            </ContactInfoWrapper>
          )}
          {contactInfo.email && (
            <ContactInfoWrapper className="mb-5">
              <EmailIcon />
              <InfoSpan className="ml-2">{contactInfo.email}</InfoSpan>
            </ContactInfoWrapper>
          )}
          {contactInfo.address && (
            <ContactInfoWrapper className="mb-5">
              <AddressIcon />
              <InfoSpan className="ml-2">{contactInfo.address}</InfoSpan>
            </ContactInfoWrapper>
          )}
        </div>
      </ContactArea>
    </SectionWrapper>
  );
}
