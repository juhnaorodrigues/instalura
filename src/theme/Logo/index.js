import React from "react";
import Image from 'next/image'
import styled from "styled-components";
const DivImage = styled.div` 
    display: flex;
`;

export function Logo() {
    return (
        <DivImage>
            <Image width={144} height={45} loading='eager' src='/instalura_icon.png'/>
        </DivImage>
    )
}

