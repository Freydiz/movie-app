import { Outlet } from 'react-router-dom';
import { GlobalStyles } from '../assets';
import { Container, Content, Footer, Header } from '../components';

export const Layout: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};
