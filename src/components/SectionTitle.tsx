import styled from "styled-components";
import {theme} from "../styles/Theme";


type SectionTitleProps = {
    color?: string;

}

export const SectionTitle = styled.h2<SectionTitleProps>`
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    color: ${(props) => props.color || theme.colors.accent};

`