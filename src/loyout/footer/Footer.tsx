import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {SocialList} from "../../components/SocialList";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
            <ContainerText>
                <Text>@2022 Jayjay Dinero Dinero</Text>
                <Text>Fullstack Developer</Text>
                <Text>UI Designer</Text>
                <Text>Data Analyst</Text>
                <Text>Designed by @ernestechie</Text>
                <SocialList />
            </ContainerText>

            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.font};
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContainerText = styled.div`
    display: flex;
gap: 21px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
`
const Text=styled.p`

`