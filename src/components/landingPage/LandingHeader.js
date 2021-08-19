import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { PrimaryButton } from '../../styles/sharedStyledComponents/buttons';
import TextLogo from '../../utils/logo/TextLogo';
import Logo from '../../utils/logo/Logo';
import { color } from '../../styles/theme';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    justify-content: center;
    margin: 2rem 1rem;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 20px 30px;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled.div`
  margin: 0.2em 2.5rem 0 0;
  font-size: ${({ fontSize }) => fontSize || '1.125rem'};
  letter-spacing: 0.075em;
  padding: 0 0.175em 0.2em 0.175em;
  font-weight: 500;
  color: ${color.main[500]};
  border-bottom: 4px solid transparent;
  transition: border-bottom 0.2s, color 0.2s;
  :hover {
    border-bottom: 4px solid ${color.main[500]};
  }
`;

const LogoArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  width: 50px;
  margin: 20px 15px 20px 30px;
`;

export default function LandingHeader() {
  const { currentUser, logOut } = useAuth();

  return (
    <Header>
      <Link to="/">
        <LogoArea>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <TextLogo fontSize="1.75rem" textAlign="center">
            LinkInterior
          </TextLogo>
        </LogoArea>
      </Link>
      <Navbar>
        <Link to="services">
          <NavItem>已發佈頁面總覽</NavItem>
        </Link>
        {currentUser ? (
          <>
            <NavItem onClick={logOut}>登出</NavItem>
            <Link to="intro-compile">
              <PrimaryButton fontSize="1rem" padding="0.75em 1em">
                開始建立頁面
              </PrimaryButton>
            </Link>
          </>
        ) : (
          <>
            <Link to="log-in">
              <NavItem>登入</NavItem>
            </Link>
            <Link to="sign-up">
              <PrimaryButton fontSize="1rem" padding="0.75em 1em">
                註冊，開始建立頁面
              </PrimaryButton>
            </Link>
          </>
        )}
      </Navbar>
    </Header>
  );
}
