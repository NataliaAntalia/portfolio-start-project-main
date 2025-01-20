import React from 'react';
import styled from 'styled-components';
import {theme} from "../../../../styles/Theme";
import {StyledButton} from "../../../../components/StyledButton";

export const Form = () => {
    return (
        <FormContainer>
            <FormTitle>Contact me, let’s make magic together</FormTitle>
            <StyledForm>
                <StyledInput placeholder={'Name:'}></StyledInput>
                <StyledInput placeholder={'Email:'}></StyledInput>
                <StyledInput as={'textarea'} placeholder={'Message:'}></StyledInput>
                <ButtonWrapper>
                    <StyledButton text={'Send'} bgColor={theme.colors.accent} width={'174px'} height={'50px'}></StyledButton>
                </ButtonWrapper>
            </StyledForm>
        </FormContainer>
    );
};

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`


const StyledForm = styled.form`
    max-width: 472px;
    min-width: 330px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 17px 0 0;
  


    textarea {
        resize: none;
        height: 100px;
 
    }

`


const StyledInput = styled.input`
    border-radius: 8px;
    border: none;
    background-color: ${theme.colors.thirdBg};
    padding: 21px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${theme.colors.font};
    font: 500 16px 'Poppins', sans-serif;


    &::placeholder {
        color: ${theme.colors.placeholderColor};
    }



`

const FormContainer = styled.div`
    padding: 0 130px 258px 0;


`

const FormTitle = styled.h4`
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    color: ${theme.colors.font};
    @media ${theme.media.mobile} {
        font-size: 18px;
        line-height: 30px;
    }

    @media ${theme.media.tablet} {
        font-size: 18px;
        line-height: 30px;
       
    }
`




