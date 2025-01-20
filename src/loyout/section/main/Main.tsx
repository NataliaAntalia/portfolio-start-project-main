import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {StyledButton} from "../../../components/StyledButton";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <ContainerMain>
                    <FlexWrapper justifyContent="space-around" alignItems="flex-start" wrap="wrap">
                        <UserIntro>
                            <ContainerProfile>
                                <Greetings color={'white'}>Hello, i’m</Greetings>
                                <ProfileName>Jayjay D. Dinero</ProfileName>
                                <IntroCard>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless
                                    web
                                    experiences for
                                    end-users.
                                </IntroCard>
                            </ContainerProfile>
                            <ButtonGroup>
                                <StyledButton iconId={'userSvg'} text={'About me'}
                                              bgColor={theme.colors.accent}></StyledButton>
                                <StyledButton bgColor={'transparent'} text={'Projects'} iconId={'eyeSvg'}
                                              borderColor={theme.colors.accent}></StyledButton>
                            </ButtonGroup>
                        </UserIntro>
                        <PhotoContainer>
                            <PhotoWrapper>
                                <Photo src={photo} alt="userPhoto"/>
                            </PhotoWrapper>
                        </PhotoContainer>
                    </FlexWrapper>
                    <Divider/>
                </ContainerMain>

            </Container>

        </StyledMain>
    );
};


const Divider = styled.div`
    height: 128px;
    position: absolute;
    left: 0;
    right: 0;
    background-color: ${theme.colors.secondaryBg};

`
const PhotoContainer = styled.div`
    width: 486px;
    height: 486px;


`


const ContainerMain = styled.div`
    padding-bottom: 128px;


`

const ContainerProfile = styled.div`
    max-width: 435px;
`


const StyledMain = styled.section`
    position: relative;
    display: flex;


`


const UserIntro = styled.span`
    padding: 209px 0 48px 49px;
    
    @media ${theme.media.tablet} {
        padding: 80px 0 50px 66px;

    }
    @media ${theme.media.mobile} {
        padding: 80px 0 50px 66px;

    }
    


`

const Greetings = styled.h2`
    color: ${theme.colors.font};
    font: 600 32px/48px Poppins, sans-serif;

`

const ProfileName = styled.h3`


    font: 600 52px/78px Poppins, sans-serif;
    color: ${theme.colors.font};
    padding: 6px 0 12px 0;
`

const IntroCard = styled.p`
    font: 500 18px/27px Poppins, sans-serif;
    color: ${theme.colors.font};
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 29px;
`


const PhotoWrapper = styled.div`
    position: relative;
    height: 100%;
    z-index: 0;
    bottom: -8%;
    margin-top: 79px;



    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: -16%;
        left: 4px;
        border-radius: 50%;
        background-color: ${theme.colors.accent};
        z-index: -1;

        @media ${theme.media.tablet} {
            bottom: -1%;
        }
        @media screen and (max-width: 1016px) {
            bottom: -1%;

        }
        @media ${theme.media.mobile} {
            width: 74%;
            height: 79%;
            left: 10%;

        }


    }
`


const Photo = styled.img`
    position: absolute;
    width: 90%;
    right: 47%;
    transform: translateX(50%);
    height: 92%;

    @media ${theme.media.tablet} {
        bottom: 24%;
    }
    @media screen and (max-width: 1016px) {
        bottom: 24%;

    }

    @media ${theme.media.mobile} {
        width: 69%;
        height: 64%;

    }
`







