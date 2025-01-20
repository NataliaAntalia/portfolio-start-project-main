import {SectionTitle} from "../../../../components/SectionTitle";
import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {SocialList} from "../../../../components/SocialList";


export const Contact = () => {
    return (
        <ContactInfoContainer>
            <SectionTitle>Connect with me:</SectionTitle>
            <Text>Satisfied with me? Please contact me</Text>
            <SocialList/>
        </ContactInfoContainer>
    );
};




const ContactInfoContainer = styled.div`

`


const Text = styled.p`
    color: ${theme.colors.font};
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    margin: 16px 0 24px 0;
    @media ${theme.media.mobile} {
        display: none;
    }
    @media ${theme.media.tablet}{
        display: none;
    }


`





