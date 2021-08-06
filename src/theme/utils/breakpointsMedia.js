import theme from "..";
import { css } from "styled-components";

const {Breakpoints} = theme;

export function breakpointsMediaQuery(cssByBreakPoints) {
    const breakPointsKey = Object.keys(cssByBreakPoints);

    return breakPointsKey.map((breakPointKey) => {
        return css`
            @media screen and (min-width:${Breakpoints[breakPointKey]}px) {
                ${cssByBreakPoints[breakPointKey]}
            }
        `
    });
}