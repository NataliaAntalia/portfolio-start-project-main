import React from 'react';
import {Icon} from "../../../../components/Icon";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
    iconId: string;
    title: string;
    iconWidth?: string;
    iconHeight?: string;
    iconViewBox?: string;
}


export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.iconWidth} viewBox={props.iconViewBox}
                  height={props.iconHeight}></Icon>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 256px;
    height: 254px;
    background: rgba(189, 189, 189, 1);
    padding-left: 24px;
    flex-grow: 1;

    &:first-child {
        background-color: ${theme.colors.accent};


    }



`

const SkillTitle = styled.h4`
    color: ${theme.colors.font};
    font: 600 24px/36px Poppins, sans-serif;
    margin: 15px 0 24px 0;
    letter-spacing: 2px;
`