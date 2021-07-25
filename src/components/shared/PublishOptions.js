import React from 'react';
import styled from 'styled-components/macro';

import { PrimaryButton, OutlineButton } from '../../styles/sharedStyledComponents/buttons';
import { color } from '../../styles/theme';
import { Heading2 } from '../../styles/sharedStyledComponents/headings';

const PublishOptionsContainer = styled.div`
  display: flex;
  margin: 150px auto 50px;
  padding: 70px 40px 70px 60px;
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

  p {
    width: 70%;
    margin: 10px auto 0;
    font-size: 0.875rem;
    text-align: center;
    line-height: 1.7em;
    color: ${color.gray[700]};
    letter-spacing: 0.05rem;
  }
`;

export default function PublishOptions({ save, publish }) {
  return (
    <>
      <PublishOptionsContainer>
        <Heading2 fontColor={color.gray[500]} fontWeight="500">
          完成編輯
        </Heading2>
        <ActionWrapper>
          <OutlineButton onClick={save} width="70%">
            儲存編輯內容
          </OutlineButton>
          <p>
            保留目前填寫圖文內容
            <br />
            （先不公開此頁面，之後再回來完成編輯）
          </p>
        </ActionWrapper>
        <ActionWrapper>
          <PrimaryButton onClick={publish} width="70%">
            發佈我的介紹頁面
          </PrimaryButton>
          <p>
            公開此頁圖文內容，讓所有人能透過這個網頁認識你
            <br />
            （發佈後可再編輯更新這個頁面）
          </p>
        </ActionWrapper>
      </PublishOptionsContainer>
    </>
  );
}
