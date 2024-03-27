import styled from 'styled-components';
import { Logo } from '../../assets';

export const Header = () => {
  return (
    <Root>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <h1>What2Watch</h1>
    </Root>
  );
};

const Root = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;

  color: #fff;
  background-color: #003366;
`;

const LogoWrapper = styled.div`
  width: 50px;
  height: auto;

  svg {
    width: 100%;
    height: auto;
  }
`;
