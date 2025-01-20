import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

export const MobileMenu = () => {


    return (


        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
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
            </MobileMenuPopup>
        </StyledMobileMenu>

    );
}

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: absolute;
    top: -100px;
    height: 200px;
    width: 200px;
    z-index: 99999999;


    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `
        }
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);         `
            }
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `
            }
        }

    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${theme.colors.thirdBg};
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        align-items: center;
        justify-content: center;
    `
    }
    ul {
        display: flex;
        color: ${theme.colors.font};
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;

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