import styled from 'styled-components';

export const Footer: React.FC = () => {
  return (
    <Root>
      <h3>Footer</h3>
    </Root>
  );
};

const Root = styled.footer`
  display: flex;
  justify-content: center;
  padding: 16px;
  color: #fff;
  background-color: #003366;
`;
