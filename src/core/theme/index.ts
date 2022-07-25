import type { Theme as StyledSystemTheme } from 'styled-system';
import breakpoints from './breakpoints';
import colors, { ColorMode } from './colors';
import { baseFontSize } from './fontSizes';
import mediaQueries from './mediaQueries';
import shadows from './shadows';
import space from './space';
import zIndices from './zIndices';

export interface Theme extends StyledSystemTheme {
  mode: ColorMode;
  baseFontSize: number;
  colors: typeof colors;
  zIndices: typeof zIndices;
  space: typeof space;
  mediaQueries: typeof mediaQueries;
  shadows: typeof shadows;
}

const theme: Theme = {
  mode: ColorMode.light,
  baseFontSize,
  breakpoints,
  colors,
  space,
  mediaQueries,
  zIndices,
  shadows,
  radii: space,
};

export default theme;
