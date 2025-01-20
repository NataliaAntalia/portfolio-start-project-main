import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {StyledButton} from "../../../../components/StyledButton";


type WorkPropsType = {
    title: string,
    text: string,
    src: string,


}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ContainerImage>
                <StyledImage src={props.src}/>
            </ContainerImage>
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.text}</WorkText>
            <ContainerButtons>
                <StyledButton text={'View Live'} bgColor={'#7562E0'} height={'43px'} width={'145px'}></StyledButton>
                <StyledButton text={'Github Repo'} bgColor={'transparent'} borderColor={'#7562E0'} height={'43px'} width={'145px'}></StyledButton>
            </ContainerButtons>
        </StyledWork>
    );
};
const ContainerImage = styled.div`
    position: relative;


    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 173px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 8px;
        background-image: linear-gradient(180deg, #1818243F 0%, #7562E07F 100%);
    }
`

const ContainerButtons = styled.div`
    display: flex;
    gap: 18px;
`


const StyledWork = styled.div`
  
    height: 417px;
    width: 343px;
    border-radius: 8px;
    padding: 16px;
    background-color: ${theme.colors.thirdBg};
    //flex-grow: 0.5;

`

const WorkTitle = styled.h4`
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: ${theme.colors.accent};
`

const WorkText = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    margin: 5px 0 24px 0;
    color: ${theme.colors.font};
`

type StyledImagePropsType = {
    src: string;
}

const StyledImage = styled.img<StyledImagePropsType>`
    width: 100%;
    height: 173px;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid ${theme.colors.accent};
    margin-bottom: 16px;
    z-index: 1;
`