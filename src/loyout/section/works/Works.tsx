import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import firstImg from "../../../assets/images/twinder.webp";
import secondImg from "../../../assets/images/livents.webp";
import thirdImg from "../../../assets/images/moove.webp";
import {StyledSection} from "../../../components/StyledSection";
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Works = () => {
    return (
        <StyledSection>
            <Container>

                <ContainerWorks>
                    <TextContainer>
                    <SectionTitle>Featured projects:</SectionTitle>

                    <DescriptionText>I have worked on many projects over the course of being a Web Developer, here are a
                        few of my live,
                        real-world projects </DescriptionText>
                </TextContainer>
                    <FlexWrapper justifyContent={'flex-start'} alignItems={'center'}>
                        <WorkSet>
                            <Work title={'TWINDER'}
                                  text={'A live Geolocation app for finding tweets and twitter users around you.'}
                                  src={firstImg}></Work>
                            <Work title={'LIVENTS'}
                                  text={'A video streaming app with live Geolocation, for streaming events.'}
                                  src={secondImg}></Work>
                            <Work title={'MOOVE'}
                                  text={'Mobile app for booking instant pickup & dropoff accross major cities.'}
                                  src={thirdImg}></Work>
                        </WorkSet>
                    </FlexWrapper>
                </ContainerWorks>
            </Container>
        </StyledSection>
    );
};


const TextContainer=styled.div`
    margin-left:120px;
    
    @media ${theme.media.mobile} {
        margin-left:40px;
    }
    @media ${theme.media.tablet} {
        margin-left:40px;

    }
`

const ContainerWorks = styled.div`
    //margin-left: 136px;

`


const DescriptionText = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
    padding: 16px 0 36px 0;
    letter-spacing: 0.5px;
    color: ${theme.colors.font};
    max-width: 1027;
`

const WorkSet = styled.div`
    margin-left: 120px;
    display: flex;
    gap: 17px;
    flex-wrap: wrap;

    @media ${theme.media.mobile} {
        justify-content: center;

    }
    @media ${theme.media.tablet} {
        margin: 0 40px 0;
        justify-content: center;



    }
   
    
`