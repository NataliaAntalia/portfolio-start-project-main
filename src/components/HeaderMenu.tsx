import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";

export const HeaderMenu = () => {


    return (


        <StyledHeaderMenu>
            <ul>
                <li>
                    <Link color={"green"} href="">Home</Link>
                </li>
                <li>
                    <Link href="">About me</Link>
                </li>
                <li>
                    <Link href="">Projects</Link></li>
                <li>
                    <Link href="">Contact</Link>
                </li>
            </ul>
        </StyledHeaderMenu>

    );
}


const StyledHeaderMenu = styled.nav`
    padding-bottom: 34px;
    
    ul{
        display: flex;
        color: ${theme.colors.font};


        > {
            &:first-child {
                color: ${theme.colors.accent};
            }
        }

        li + li {
            margin-left: 52px;
        }
    }
 
@media ${theme.media.tablet} {
    display: none;
}
`




const Link = styled.a`
    font-size: 18px;
    line-height: 27px;
    position: relative;
    z-index: 0;
    color: inherit;


    &:hover {
        &::before {
            height: 5px;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        background: ${theme.colors.accent};

        position: absolute;
        bottom: 2px;
        left: 0;
        right: 0;
        z-index: -1;
    }

`