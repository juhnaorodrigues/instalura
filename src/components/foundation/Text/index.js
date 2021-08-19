import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import propertyToStyle from '../../../theme/utils/propertyToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const MapVariantStyleText = {
  smallestException: css`
            font-size: ${({ theme }) => theme.TypographyVariants.smallestException.fontSize};
            font-weight: ${({ theme }) => theme.TypographyVariants.smallestException.fontWeight};
            line-height: ${({ theme }) => theme.TypographyVariants.smallestException.lineHeight};
    `,
  paragraph1: css`
            font-size: ${({ theme }) => theme.TypographyVariants.paragraph1.fontSize};
            font-weight: ${({ theme }) => theme.TypographyVariants.paragraph1.fontWeight};
            line-height: ${({ theme }) => theme.TypographyVariants.paragraph1.lineHeight};
    `,
  title: css`
      ${({ theme }) => css`
        font-size: ${theme.TypographyVariants.titleXS.fontSize};
        font-weight: ${theme.TypographyVariants.titleXS.fontWeight};
        line-height: ${theme.TypographyVariants.titleXS.lineHeight};
      `}
      ${breakpointsMedia({
    md: css`
            ${({ theme }) => css`
              font-size: ${theme.TypographyVariants.title.fontSize};
              font-weight: ${theme.TypographyVariants.title.fontWeight};
              line-height: ${theme.TypographyVariants.title.lineHeight};
            `}
          `,
  })}
  `,
};

const TextBase = styled.span`
    ${({ variant }) => MapVariantStyleText[variant]}
    color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
    
    ${propertyToStyle('textAlign')}
    ${propertyToStyle('marginBottom')}
    ${propertyToStyle('margin')}
`;

export default function Text({
  tag, variant, children, ...style
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase variant={variant} as={tag} {...style}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};

// tags que podemos usar como texto:
// P
// Titulos de h1 a h6
// escrever inline usar a tag span
