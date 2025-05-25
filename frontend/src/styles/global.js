import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #f7fafc;
    color: #2d3748;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`;
