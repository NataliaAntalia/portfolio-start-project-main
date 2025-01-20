import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/Icon";
import {theme} from "../../../../styles/Theme";


type ServicePropsType = {
    iconId: string;
    title: string;
    text: string;
    iconWidth?: string;
    iconHeight?: string;
    iconViewBox?: string;

}


export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <Icon iconId={props.iconId} width={props.iconWidth} height={props.iconHeight}
                  viewBox={props.iconViewBox}></Icon>
            <ServiceTitle>{props.title}</ServiceTitle>
            <ServiceText>{props.text}</ServiceText>
        </StyledService>
    );
};


const StyledService = styled.div`
    padding: 0 20px;
    margin: 0 22px 16px 0;
    //flex-grow: 1;
    
    width: 341px;
    height: 338px;
    border-radius: 16px;
    border: 3px solid ${theme.colors.accent};

    @media ${theme.media.mobile}{
   
    }
    
    &:nth-child(even) {
        border: 3px solid ${theme.colors.font}
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.accent};

    &:nth-child(odd) {
        color: ${theme.colors.font};
    }


`

const ServiceTitle = styled.h4`
    font-size: 24px;
    font-weight: 600;
    padding: 8px  0 16px 0;
    line-height: 36px;

`

const ServiceText = styled.p`
    font-size: 17px;
    line-height: 28px;
    font-weight: 500;
    text-align: center;
    color: ${theme.colors.font};
`