import React from 'react';
import {Icon} from "./Icon";
import styled from "styled-components";


type StyledButtonPropsType = {
    iconId?: string;
    bgColor?: string;
    text?: string;
    color?: string;
    borderColor?: string;
    width?: string;
    height?: string;
}

export const StyledButton = (props: StyledButtonPropsType) => {
    return (
        <StyledBtn bgColor={props.bgColor} borderColor={props.borderColor} height={props.height} width={props.width}>
            <StyledText>{props.text}</StyledText>
            {props.iconId &&
                <Icon iconId={props.iconId} width={'24px'} height={'24px'} viewBox={'0 0 24px 24px'}></Icon>
            }
        </StyledBtn>
    );
};

const StyledBtn = styled.button<StyledButtonPropsType>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    //padding: 9.5px 25px;
    border-radius: 8px;
    background-color: ${(props) => props.bgColor || 'white'};
    border: ${(props) => props.borderColor ? `2px solid ${props.borderColor}` : 'none'};
    color: ${(props) => props.color || 'white'};
    width: ${(props) => props.width || '160px'};
    height: ${(props) => props.height || '48px'};
    //width:160px ;
    //height: 48px ;
    flex-wrap: nowrap;

    &:hover {
        background-color: rgba(117, 98, 224, 0.42);
    }
`




const StyledText = styled.span`
    font-size: 16px;
    font-weight: 600;


`




