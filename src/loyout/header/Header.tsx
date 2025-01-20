import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/Logo";
import {HeaderMenu} from "../../components/HeaderMenu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "../../components/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <ContainerHeader>
                    <FlexWrapper justifyContent={'space-around'} alignItems={'center'}>
                        <Logo/>
                        <HeaderMenu/>
                        <MobileMenu/>
                    </FlexWrapper>
                </ContainerHeader>
            </Container>
        </StyledHeader>

    );
};

const ContainerHeader = styled.div`
    padding-top: 19px;
    font-weight: 600;
  
    
   

`


const StyledHeader = styled.header`
    background-color: ${theme.colors.secondaryBg};
 
`