import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import * as system from 'styled-system';

import { getColor } from "@utils/styles";
import { ColorModes } from '@core/theme/colors';
import { Theme } from "@core/theme";

export interface BoxProps
  extends system.SpaceProps,
    system.LayoutProps,
    system.FlexboxProps,
    system.GridProps,
    Pick<system.ColorProps, 'opacity'>,
    system.BorderProps,
    system.ShadowProps,
    system.PositionProps,
    system.GridGapProps,
    system.TextAlignProps,
    system.TypographyProps {
  color?: ColorModes | string;
  borderColor?: ColorModes | string;
  bg?: ColorModes | string;
  theme: Theme;
}

const Box = styled.div
  .attrs<BoxProps>(( props : BoxProps) => {
    const {theme, color, bg, borderColor} = props
    return {
      bg: getColor(theme, bg),
      color: getColor(theme, color),
      borderColor: getColor(theme, borderColor),
    };
  })
  .withConfig({
    shouldForwardProp: (prop) => !defaultFilteredProps.includes(String(prop)),
  })<BoxProps>`
  ${system.space}
  ${system.color}
  ${system.layout}
  ${system.flexbox}
  ${system.grid}
  ${system.border}
  ${system.shadow}
  ${system.position}
  ${system.textAlign}
  ${system.typography}

`;

export default Box;
