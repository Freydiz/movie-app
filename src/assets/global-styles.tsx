import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato:100,400,800|Montserrat:500i&display=swap');

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

body {
  font-size: 100%;
  font-family: 'Lato', sans-serif;
}

h1, h2, h3 {
  font-style: normal;
  letter-spacing: 0.1rem;
  font-weight: 800;
}

h1 {
  font-size: 1.625rem;
  line-height: 2mre;

  @media only screen and (min-width: 993px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

h2 {
  font-size: 1.375rem;
  line-height: 2rem;

  @media only screen and (min-width: 993px) {
    font-size: 1.625rem;
    line-height: 2rem;
  }
}

h3 {
  font-size: 1.125rem;
  line-height: 1.5rem;

  @media only screen and (min-width: 993px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
}

p {
  line-height: 1.5;
}
`;
