import { ReactElement } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '@core/theme';
import GlobalStyle from "@core/GlobalStyle";
import { useAppSelector } from "@hooks/app/useAppSelector";
import { selectColorMode } from "@store/settings/settingsSlice";

const ThemeProvider = ({ children }: { children: ReactElement }): ReactElement => {
  const colorMode = useAppSelector(selectColorMode)

  return (
    <StyledThemeProvider theme={{ ...theme, mode: colorMode }}>
      <GlobalStyle colorMode={colorMode} />
      {children}
    </StyledThemeProvider>
  );
}

export default ThemeProvider;
