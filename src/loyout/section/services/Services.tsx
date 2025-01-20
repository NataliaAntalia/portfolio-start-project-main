import React from 'react';

import {StyledSection} from "../../../components/StyledSection";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Service} from "./service/Service";
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Services = () => {
    return (
        <StyledSection>
            <Container>
                <ContainerServices>
                    <DivContainer>
                    <SectionTitle>The services i offer:</SectionTitle>
                    </DivContainer>
                    <FlexWrapper wrap={'wrap'}>
                        <ServiceSet>
                            <Service iconWidth={'56'} iconHeight={'56'} iconViewBox={' 0 0 56 56'}
                                     title={'UI & UX DESIGNING'}
                                     iconId={'rulerPenSvg'}
                                     text={'I design beautiful web iterfaces with Figma and Adove XD'}></Service>
                            <Service iconWidth={'57'} iconHeight={'57'} iconViewBox={'0 0 57 57'}
                                     title={'WEB DEVELOPMENT'}
                                     iconId={'codeSvg'}
                                     text={'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS'}></Service>
                            <Service iconWidth={'70'} iconHeight={'70'} iconViewBox={'0 0 70 70'}
                                     title={'MOBILE DEVELOPMENT'}
                                     iconId={'androidSvg'}
                                     text={'I am an expert mobile developer. I have experience using Flutter and React Native.'}></Service>
                            <Service iconWidth={'62'} iconHeight={'62'} iconViewBox={'0 0 62 62'}
                                     title={'VERSION CONTROL'}
                                     iconId={'gitRepoSvg'}
                                     text={'I can use version control systems well, and Git & Mecurial are my go-to tool.'}></Service>
                            <Service iconWidth={'54'} iconHeight={'54'} iconViewBox={'0 0 54 54'}
                                     title={'NPM AND NODEJS'}
                                     iconId={'javascriptSvg'}
                                     text={'I have core understanding of NPM. I can also develop general purpose applications with NodeJS'}></Service>
                            <Service iconWidth={'48'} iconHeight={'48'} iconViewBox={'0 0 48 48'}
                                     title={'WEB SCRAPING'}
                                     iconId={'sliderSvg'}
                                     text={'I can collect content and data from the internet then manipulate and analyze as needed.'}></Service>
                        </ServiceSet>
                    </FlexWrapper>
                </ContainerServices>
            </Container>
        </StyledSection>
    );
};

const DivContainer=styled.div`
    margin-left: 120px;
    
    @media ${theme.media.mobile} {
        margin-left: 40px;
    }
    @media ${theme.media.tablet} {
        margin-left: 40px;
    }
`


const ContainerServices = styled.div`
    
   
   
`


const ServiceSet = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 32px 0 60px 120px;

    @media ${theme.media.mobile} {
        align-items: center;
        margin: 32px 20px 80px 40px;
    }
    @media ${theme.media.tablet} {
        align-items: center;
        margin: 32px 20px 80px 40px;
    }
`

