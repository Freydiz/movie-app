import styled from 'styled-components';

interface Props extends React.PropsWithChildren {}

export const Container: React.FC<Props> = (props) => {
  const { children } = props;

  return <Root>{children}</Root>;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
