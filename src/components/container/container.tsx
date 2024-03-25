import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = (props) => {
  const { children } = props;

  return <Root>{children}</Root>;
};

const Root = styled.div`
  display: flex;
  flex: 1;
  padding: 16px;
`;
