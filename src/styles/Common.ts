import {theme} from "./Theme";

type FontsPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontsPropsType) => `

font-family: ${family || "Poppins"};
font-weight: ${weight || 500};
color: ${color || theme.colors.font};
lineHeight: ${lineHeight || 1.2};
font-size: calc( (100vw -480 px)/(1440 - 480) * (${Fmax} - ${Fmin}) + ${Fmin}px);

`