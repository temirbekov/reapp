import { ComponentClass, ReactNode } from 'react';
import styled from 'styled-components';
import * as system from 'styled-system';
import { variant } from 'styled-system';
import { ColorModes } from '@core/theme/colors';
import { getColor } from '@utils/styles';
import { Theme } from '@core/theme';

export const variants = {
  h1: {
    fontSize: '32px',
    lineHeight: '1',
  },
  h2: {
    fontSize: '28px',
    lineHeight: '1',
  },
  h3: {
    fontSize: '24px',
    lineHeight: '1',
  },
  h4: {
    fontSize: '22px',
    lineHeight: '1',
  },
  h5: {
    fontSize: '18px',
    lineHeight: '1',
  },
  body1: {
    fontSize: '14px',
    lineHeight: '18px',
  },
  body2: {
    fontSize: '16px',
    lineHeight: '20px',
  },
  body3: {
    fontSize: '18px',
    lineHeight: '22px',
  },
  body4: {
    fontSize: '22px',
    lineHeight: '26px',
  },
  link: {
    fontSize: '14px',
    lineHeight: '1.6',
    textDecoration: 'none',
  },
  link2: {
    fontSize: '16px',
    lineHeight: '1.4',
    textDecoration: 'none',
  },
};

type ParagraphVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'body2' | 'body3' | 'body4' | 'link' | 'link2';

const variantsTagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  link: 'a',
  link2: 'a',
};

export interface ParagraphProps
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
  variant?: ParagraphVariants;
  as?: ComponentClass | string | null;
  children: ReactNode;
  color?: ColorModes | string;
  theme: Theme;
}

const StyledParagraph = styled.p.attrs<ParagraphProps>((props: ParagraphProps) => {
  const { theme, color, variant } = props;
  return {
    color: getColor(theme, color),
    variant: variant || 'body1',
  };
})<ParagraphProps>`
  ${variant({ variants })};
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

function Paragraph({ as, variant, children, ...props }: Omit<ParagraphProps, 'theme'>) {
  const newAs = as || (variant ? variantsTagMap[variant] : undefined) || 'p';

  return (
    <StyledParagraph as={newAs} variant={variant} {...props}>
      {children}
    </StyledParagraph>
  );
}
export default Paragraph;
