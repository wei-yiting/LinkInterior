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

const ContactInputsArea = styled.div`
  background-color: #eee;
`;
const InputContainer = styled.div``;
const ContactInputField = styled.input``;

const ContactInputFields = ({ contactInfo, setContactInfo }) => {
  return (
    <div>
      <h5>我的聯絡資訊</h5>
      <ContactInputsArea>
        <InputContainer>
          <MobileIcon />
          <ContactInputField
            type="tel"
            placeholder="手機號碼"
            value={contactInfo.mobile}
            onChange={(e) => setContactInfo({ ...contactInfo, mobile: e.target.value })}
          />
        </InputContainer>
        <InputContainer>
          <PhoneIcon />
          <ContactInputField
            type="tel"
            placeholder="市話號碼"
            value={contactInfo.phone}
            onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
          />
        </InputContainer>
        <InputContainer>
          <LineIcon />
          <ContactInputField
            type="text"
            placeholder="Line ID"
            value={contactInfo.line}
            onChange={(e) => setContactInfo({ ...contactInfo, line: e.target.value })}
          />
        </InputContainer>
        <InputContainer>
          <EmailIcon />
          <ContactInputField
            type="email"
            placeholder="電子信箱"
            value={contactInfo.email}
            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
          />
        </InputContainer>
        <InputContainer>
          <AddressIcon />
          <ContactInputField
            type="text"
            placeholder="聯絡地址"
            value={contactInfo.address}
            onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
          />
        </InputContainer>
        <InputContainer>
          <WebsiteIcon />
          <ContactInputField
            type="url"
            placeholder="網站連結"
            value={contactInfo.website}
            onChange={(e) => setContactInfo({ ...contactInfo, website: e.target.value })}
          />
        </InputContainer>
        <InputContainer>
          <FacebookIcon />
          <ContactInputField
            type="url"
            placeholder="Facebook 專頁連結"
            value={contactInfo.fb}
            onChange={(e) => setContactInfo({ ...contactInfo, fb: e.target.value })}
          />
        </InputContainer>
        <InputContainer>
          <InstagramIcon />
          <ContactInputField
            type="text"
            placeholder="Instragram 帳號連結"
            value={contactInfo.ig}
            onChange={(e) => setContactInfo({ ...contactInfo, ig: e.target.value })}
          />
        </InputContainer>
      </ContactInputsArea>
    </div>
  );
};

export default ContactInputFields;
