import styled from 'styled-components';

export const Header = () => {
  return (
    <Root>
      <h1>What2Watch</h1>
    </Root>
  );
};

const Root = styled.header`
  padding: 16px;
  color: #fff;
  background-color: #000;
`;
