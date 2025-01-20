import React from 'react';
import styled from "styled-components";
import {Contact} from "./contact/Contact";
import {Form} from "./form/Form";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


export const Contacts = () => {
    return (
        <StyledContact>
            <Container>
            <ContainerContacts>
            <Contact/>
            <Form/>
            </ContainerContacts>
            </Container>
        </StyledContact>


    );
};




const StyledContact = styled.section`


`


const ContainerContacts = styled.div`
display: flex;
    padding: 128px 0 0 120px;
    justify-content: space-between;
    flex-wrap: wrap;


@media ${theme.media.mobile} {
    padding: 40px;

}
    @media ${theme.media.tablet} {
        padding: 40px;



    }
 
`







