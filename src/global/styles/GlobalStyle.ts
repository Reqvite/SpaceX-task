import "modern-normalize";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
    color: ${(p) => p.theme.colors.mainColorDark};
 background-color: ${(p) => p.theme.colors.mainBackground};
  margin: 0;
  font-family: 'Syne', sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
#root{
  height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}  

*::-webkit-scrollbar {
  width: 8px;
}
 
*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
*::-webkit-scrollbar-thumb {
    border-radius: 5px;
  background-color: darkgrey;
}


`;
