import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
font-family: 'Montserrat', sans-serif;
  color: #212121;
      height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

button {
  cursor: pointer;
}


a {
  color: currentColor;
}

address {
  font-style: normal;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

.noScroll{
  overflow: hidden;
  height: 100vh;
}

`;

export default GlobalStyle;
