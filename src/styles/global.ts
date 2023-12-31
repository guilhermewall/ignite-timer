import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["gray-500"]};
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme["gray-900"]};
  }

  body, input-security, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-300"]};
  }
`;
