import { ThemeProvider } from "styled-components";
import Button from "./Components/Button";
import { defaultTheme } from "./styles/themes/default";
import { StyleGlobal } from "./styles/global";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <StyleGlobal />
    </ThemeProvider>
  );
};

export default App;
