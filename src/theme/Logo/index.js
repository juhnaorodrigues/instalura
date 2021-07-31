import React from "react";
import Images from "../Logo/Images";
import Image from 'next/image'
import styled from "styled-components";

const DivImage = styled.div` 
    display: flex;
`;

export function Logo() {
    return (
        <DivImage>
            <Image width='44px' height='35px' src="/instaluraIcon.png"/>
            <Image width='96px' height='24px' src="/instaluraText.png"/>
        </DivImage>
    )
}

