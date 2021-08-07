import React from "react";
import styled, { css } from "styled-components";
import PropTypes from 'prop-types'
import { propertyToStyle } from "../../../theme/utils/propertyToStyle";


export const MapVariantStyleText = {
    title : css`
            font-size: ${({ theme }) => theme.TypographyVariants.title.fontSize};
            font-weight: ${({ theme }) => theme.TypographyVariants.title.fontWeight};
            line-height: ${({ theme }) => theme.TypographyVariants.title.lineHeight};
    `,
    smallestException : css`
            font-size: ${({ theme }) => theme.TypographyVariants.smallestException.fontSize};
            font-weight: ${({ theme }) => theme.TypographyVariants.smallestException.fontWeight};
            line-height: ${({ theme }) => theme.TypographyVariants.smallestException.lineHeight};
    `,
    paragraph1 : css`
            font-size: ${({ theme }) => theme.TypographyVariants.paragraph1.fontSize};
            font-weight: ${({ theme }) => theme.TypographyVariants.paragraph1.fontWeight};
            line-height: ${({ theme }) => theme.TypographyVariants.paragraph1.lineHeight};
    `
}

const TextBase = styled.span`
    ${({variant}) => MapVariantStyleText[variant]}
    ${ propertyToStyle('textAlign') }
`;

export default function Text ({tag, variant, children, ...style}) {
    return (
        <TextBase variant={variant} as={tag} {...style}>
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1'
}

//tags que podemos usar como texto:
//P
//Titulos de h1 a h6
//escrever inline usar a tag span