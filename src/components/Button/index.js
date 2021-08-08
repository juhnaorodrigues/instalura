import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { MapVariantStyleText } from '../foundation/Text';
import breakpointsMediaQuery from '../../theme/utils/breakpointsMedia';
import propertyToStyle from '../../theme/utils/propertyToStyle';

const ghostCss = css`
    background: transparent;
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const primary = css`
    background: ${function (props) {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
    color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
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

const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    opacity: 1;
    font-weight: bold;
    border-radius: 8px;
    ${MapVariantStyleText.smallestException}
    ${(props) => mapaTipoBotao.get(props.type)}
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

    ${propertyToStyle('margin')}
    ${propertyToStyle('display')}
`;

export { Button as default };
