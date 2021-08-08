import { css } from 'styled-components';
import theme from '..';

const { Breakpoints } = theme;

function breakpointsMediaQuery(cssByBreakPoints) {
  const breakPointsKey = Object.keys(cssByBreakPoints);

  return breakPointsKey.map((breakPointKey) => css`
            @media screen and (min-width:${Breakpoints[breakPointKey]}px) {
                ${cssByBreakPoints[breakPointKey]}
            }
        `);
}

export { breakpointsMediaQuery as default };
