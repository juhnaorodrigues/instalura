import styled from 'styled-components';
import propertyToStyle from '../../../../theme/utils/propertyToStyle';

const Box = styled.div`
    ${propertyToStyle('flex')}
    ${propertyToStyle('display')}
    ${propertyToStyle('flexWrap')}
    ${propertyToStyle('flexDirection')}
    ${propertyToStyle('justifyContent')}
    ${propertyToStyle('backgroundColor')}
    ${propertyToStyle('backgroundImage')}
    ${propertyToStyle('backgroundRepeat')}
    ${propertyToStyle('backgroundPosition')}
    ${propertyToStyle('boxShadow')}
    ${propertyToStyle('padding')}
    ${propertyToStyle('width')}
    ${propertyToStyle('listStyle')}
    ${propertyToStyle('margin')}
    ${propertyToStyle('marginLeft')}
    ${propertyToStyle('marginTop')}
    ${propertyToStyle('marginBottom')}
    ${propertyToStyle('marginRight')}
    ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;

export { Box as default };
