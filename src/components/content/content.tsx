import styled from 'styled-components';

interface Props extends React.PropsWithChildren {}

export const Content: React.FC<Props> = (props) => {
  const { children } = props;

  return <Root>{children}</Root>;
};

const Root = styled.main`
  display: flex;
  flex: 1;
  padding: 16px;
`;
