import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { StyleGlobal } from "./styles/global";
import RouterProvider from "./Router";
import { CyclesContextProvider } from "./contexts/CyclesContext";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <RouterProvider />
      </CyclesContextProvider>

      <StyleGlobal />
    </ThemeProvider>
  );
};

export default App;
