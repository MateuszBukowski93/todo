import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      gray: string;
      grayLight: string;
      white: string;
      red: string;
      green: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    screenSizeWidth: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    borderRadius: string;
  }
}
