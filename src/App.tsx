import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { StyleGlobal } from "./styles/global";
import RouterProvider from "./Router";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider />

      <StyleGlobal />
    </ThemeProvider>
  );
};

export default App;
