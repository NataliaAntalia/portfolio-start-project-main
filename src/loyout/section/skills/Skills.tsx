import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {StyledSection} from "../../../components/StyledSection";
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSection>

            <Container>
                <ContainerSkils>
                    <TextContainer>
                        <SectionTitle>About me:</SectionTitle>
                        <FlexWrapper justifyContent="space-around" direction="column">

                            <AboutMe>Hi, my name is Jayjay Dinero
                                Dinero, i am a Fullstack web developer, UI designer, and Mobile
                                developer. I jhave honed my skills in Web Development and advance i have core
                                understanding
                                of
                                advance UI design principles.
                                Here are the major skiills i have. </AboutMe>
                            <FlexWrapper alignItems="center">
                                <NumberPlus>5+</NumberPlus>
                                <StyledText>Years of experience.
                                    Specialised in building apps, while ensuring a seamless web experience for
                                    end users.</StyledText></FlexWrapper>
                        </FlexWrapper>
                    </TextContainer>
                    <FlexWrapper justifyContent="flex-start">
                        <SkillSet>
                            <Skill iconWidth={'42'} iconHeight={'42'} iconViewBox={'0 0 42 42'} iconId={'rulerPenSvg'}
                                   title={'UI &' + ' UX DESIGNING'}/>
                            <Skill iconWidth={'57'} iconHeight={'57'} iconViewBox={'0 0 57 57'} iconId={'codeSvg'}
                                   title={'WEB DEVELOPMENT'}/>
                            <Skill iconWidth={'62'} iconHeight={'62'} iconViewBox={'0 0 62 62'} iconId={'androidSvg'}
                                   title={'MOBILE DEVELOPMENT'}/>
                            <Skill iconWidth={'55'} iconHeight={'55'} iconViewBox={'0 0 55 55'} iconId={'pythonSvg'}
                                   title={'WEB SCRAPING WITH PYTHON'}/>
                        </SkillSet>
                    </FlexWrapper>
                </ContainerSkils>

            </Container>

        </StyledSection>

    );
};

const AboutMe = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
    max-width: 1032px;
    padding-top: 6px;


`

const TextContainer = styled.div`
    @media ${theme.media.tablet} {
        padding: 40px;

    }
`

const SkillSet = styled.div`
    display: flex;
    gap: 17px;
    margin: 18px 0 80px 0;
    flex-wrap: wrap;

    @media ${theme.media.mobile} {
        justify-content: center;
        margin: 0 40px 40px;
    }
    @media ${theme.media.tablet} {
        justify-content: center;
        margin: 0 40px 40px;

    }
`


const ContainerSkils = styled.div`
    padding: 60px 0 0 120px;
    color: ${theme.colors.font};

    @media ${theme.media.tablet} {
        padding: 0
    }


}
`

const NumberPlus = styled.h3`
    font-size: 96px;
    font-weight: 600;
    line-height: 144px;
    color: ${theme.colors.accent};
    padding-right: 18px;

`


const StyledText = styled.p`
    color: ${theme.colors.font};
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    max-width: 920px;
    
    padding-bottom: 10px;


    @media ${theme.media.mobile} {
        padding: 10px 0;

    }
`

