import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

// aqui a gente esta mexendo no padrao de temas onde a gente consegue agora acessar os temas no styled components. Guarde esse exemplo para usar nos proximos projetos
