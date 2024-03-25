import { Container, Footer, Header, Search } from './components';
import { GlobalStyles } from './assets';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Search />
      </Container>
      <Footer />
    </>
  );
}

export default App;
