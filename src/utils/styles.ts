import type { Theme } from '@core/theme';
import { ColorModes } from "@core/theme/colors";
import { Device } from "@core/theme/breakpoints";
import theme from "@core/theme";

export const mediaQuery = (device: Device): string => theme.mediaQueries![device];

export const getColor = (theme: Theme, prop:  string | ColorModes | undefined) => {
  if (typeof prop === "object") {
    const objKeys = Object.keys(prop);
    if(objKeys.includes('light') && objKeys.includes('dark')) {
      return prop[theme.mode]
    }
  }
  return prop
}
