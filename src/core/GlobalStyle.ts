import { createGlobalStyle, ThemeProps } from 'styled-components';
import reset from "styled-reset";

import { Theme } from './theme';
import { ColorMode } from "@core/theme/colors";

interface GlobalStylesProps extends ThemeProps<Theme> {
  colorMode: ColorMode;
}

const GlobalStyle = createGlobalStyle<GlobalStylesProps>`
    ${reset}

    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    
    body {
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
      background-color: ${({ theme }) => theme.colors.gray.variant1};
    }
`;

export default GlobalStyle;
