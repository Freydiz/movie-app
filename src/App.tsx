import { Container, Content, Footer, Header, Search } from './components';
import { GlobalStyles } from './assets';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Content>
        <Search />
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
