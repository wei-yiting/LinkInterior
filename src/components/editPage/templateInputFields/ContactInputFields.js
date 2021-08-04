import React from 'react';

import { SectionWrapper, ContactArea } from '../../../styles/layoutStyledComponents/TemplateLayout';
import { ContactInputField, MediaInputField } from './InfoInputField';
import { Heading3 } from '../../../styles/sharedStyledComponents/headings';

import {
  MobileIcon,
  PhoneIcon,
  LineIcon,
  EmailIcon,
  AddressIcon,
  WebsiteIcon,
  FacebookIcon,
  InstagramIcon,
} from '../../../utils/icons/fontAwesome';

export default function ContactInputFields({
  width,
  margin,
  contactInputStyle,
  mediaInputStyle,
  flexDirection,
}) {
  return (
    <SectionWrapper width={width} flex="none" margin={margin}>
      <Heading3>我的聯絡資訊</Heading3>
      <ContactArea flexDirection={flexDirection}>
        <div style={contactInputStyle}>
          <ContactInputField type="tel" placeholder="手機號碼" name="mobile">
            <MobileIcon />
          </ContactInputField>
          <ContactInputField type="tel" placeholder="市話號碼" name="phone">
            <PhoneIcon />
          </ContactInputField>
          <ContactInputField type="text" placeholder="Line ID" name="line">
            <LineIcon />
          </ContactInputField>
          <ContactInputField type="email" placeholder="電子信箱" name="email">
            <EmailIcon />
          </ContactInputField>
        </div>
        <div style={mediaInputStyle}>
          <ContactInputField type="text" placeholder="聯絡地址" name="address">
            <AddressIcon />
          </ContactInputField>
          <MediaInputField type="url" placeholder="網站連結" name="website">
            <WebsiteIcon />
          </MediaInputField>
          <MediaInputField type="url" placeholder="Facebook 專頁連結" name="fb">
            <FacebookIcon />
          </MediaInputField>
          <MediaInputField type="text" placeholder="Instragram 帳號連結" name="ig">
            <InstagramIcon />
          </MediaInputField>
        </div>
      </ContactArea>
    </SectionWrapper>
  );
}
