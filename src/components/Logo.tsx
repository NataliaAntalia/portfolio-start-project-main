import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Logo = () => {
    return (
        <LogoTitle>Jayjay Dinero</LogoTitle>


    );
};


const LogoTitle = styled.h4`
    font-size: 28px;
    color: ${theme.colors.accent};
    line-height: 42px;
    padding-bottom: 19px;
    padding-left: 160px;
    
    @media ${theme.media.mobile} {
        padding-left:0;

    }
`

