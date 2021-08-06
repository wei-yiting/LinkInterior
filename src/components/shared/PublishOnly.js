import React, { useState, useContext } from 'react';
import styled from 'styled-components/macro';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import { PrimaryButton } from '../../styles/sharedStyledComponents/buttons';
import { color } from '../../styles/theme';
import { Heading2 } from '../../styles/sharedStyledComponents/headings';
import Uploading from './Uploading';

const PublishOptionsContainer = styled.div`
  display: flex;
  margin: 150px auto 50px;
  padding: 70px 40px 50px 60px;
  width: 100%;
  justify-content: space-around;
  border: 4px solid ${color.gray[100]};
  background: white;
  border-radius: 10px;
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;

  span {
    display: block;
    width: 70%;
    margin: 10px auto 0;
    font-size: 0.875rem;
    text-align: center;
    line-height: 1.7em;
    color: ${color.gray[700]};
    letter-spacing: 0.05rem;
  }
`;

const EmptyReminderText = styled.p`
  margin-bottom: 1.5rem;
  color: ${color.error.light};
`;

const PublishOptions = React.memo(() => {
  const {
    intro,
    selectedHeroImage,
    selectedServiceCities,
    contactInfo,
    emptyFieldReminder,
    setEmptyFieldReminder,
  } = useContext(IntroCompileContext);
  const [isPublishing, setIsPublishing] = useState(false);

  const checkRequiredFieldAndPublish = () => {
    setEmptyFieldReminder('');
    if (!intro || !selectedHeroImage || selectedServiceCities.length === 0) {
      if (!intro) {
        setEmptyFieldReminder('您的介紹不能空白');
      } else if (!selectedHeroImage) {
        setEmptyFieldReminder('請選取一張代表您的大圖');
      } else if (selectedServiceCities.length === 0) {
        setEmptyFieldReminder('請至少選擇一個您的服務地區');
      }
    } else if (
      !(
        contactInfo.mobile ||
        contactInfo.phone ||
        contactInfo.line ||
        contactInfo.email ||
        contactInfo.address ||
        contactInfo.website ||
        contactInfo.fb ||
        contactInfo.ig
      )
    ) {
      setEmptyFieldReminder('請至少填寫一項您的聯絡資訊');
    } else {
      setIsPublishing(true);
    }
  };

  return (
    <>
      {isPublishing && <Uploading publishStatus="true" />}
      <PublishOptionsContainer>
        <Heading2 fontColor={color.gray[500]} fontWeight="500">
          完成編輯
        </Heading2>
        <ActionWrapper>
          {emptyFieldReminder && <EmptyReminderText>{emptyFieldReminder}</EmptyReminderText>}
          <PrimaryButton onClick={checkRequiredFieldAndPublish} width="50%">
            發佈我的介紹頁面
          </PrimaryButton>
          <span>上傳圖文，讓大家看到這個介紹我的頁面</span>
        </ActionWrapper>
      </PublishOptionsContainer>
    </>
  );
});

export default PublishOptions;
