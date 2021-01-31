import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<styledComponents.DefaultTheme>;

export { css, ThemeProvider };
export default styled;
