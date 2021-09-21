/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { MapVariantStyleText } from '../foundation/Text';
import breakpointsMediaQuery from '../../theme/utils/breakpointsMedia';
import propertyToStyle from '../../theme/utils/propertyToStyle';
import Link from '../commons/Link';

const ghostCss = css`
    background: transparent;
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const primary = css`
    background: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const mapaTipoBotao = new Map([
  [
    'primary',
    primary,
  ],
  [
    'ghost',
    ghostCss,
  ],
]);

const ButtonWrapper = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    opacity: 1;
    font-weight: bold;
    border-radius: 8px;
    ${MapVariantStyleText.smallestException}
    ${(props) => mapaTipoBotao.get(props.styleButton)}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:hover,
    &:focus {
        opacity: inherit.5;
    }

    ${breakpointsMediaQuery({
    xs: css`
            /* All devices */
            ${MapVariantStyleText.smallestException}
            `,
    md: css`
            /* From md breakpoint */
            ${MapVariantStyleText.paragraph1}
        `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${propertyToStyle('margin')}
  ${propertyToStyle('display')}
`;

export default function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
