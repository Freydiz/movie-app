import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from '../../assets';

export const Header: React.FC = () => {
  return (
    <Root>
      <LogoWrapper to="/">
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

const LogoWrapper = styled(Link)`
  cursor: pointer;
  width: 50px;
  height: auto;

  svg {
    width: 100%;
    height: auto;
  }
`;
