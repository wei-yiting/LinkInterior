import React from 'react';

import { SectionWrapper, ContactArea } from '../../../styles/layout/TemplateLayout';
import { ContactInputField, MediaInputField } from '../../../styles/TailwindUI/InfoInputField';

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

const ContactInputFields = ({ contactInfo, setContactInfo }) => {
  return (
    <SectionWrapper>
      <h5>我的聯絡資訊</h5>
      <ContactArea>
        <ContactInputField
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          type="tel"
          placeholder="手機號碼"
          name="mobile"
        >
          <MobileIcon />
        </ContactInputField>
        <ContactInputField
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          type="tel"
          placeholder="市話號碼"
          name="phone"
        >
          <PhoneIcon />
        </ContactInputField>
        <ContactInputField
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          type="text"
          placeholder="Line ID"
          name="line"
        >
          <LineIcon />
        </ContactInputField>
        <ContactInputField
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          type="email"
          placeholder="電子信箱"
          name="email"
        >
          <EmailIcon />
        </ContactInputField>
        <ContactInputField
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          type="text"
          placeholder="聯絡地址"
          name="address"
        >
          <AddressIcon />
        </ContactInputField>
        <MediaInputField
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          type="url"
          placeholder="網站連結"
          name="website"
        >
          <WebsiteIcon />
        </MediaInputField>
        <MediaInputField
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          type="url"
          placeholder="Facebook 專頁連結"
          name="fb"
        >
          <FacebookIcon />
        </MediaInputField>
        <MediaInputField
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          type="text"
          placeholder="Instragram 帳號連結"
          name="ig"
        >
          <InstagramIcon />
        </MediaInputField>
      </ContactArea>
    </SectionWrapper>
  );
};

export default ContactInputFields;
