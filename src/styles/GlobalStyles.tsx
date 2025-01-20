import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        min-width: 550px;
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    &:focus-visible {
        outline: 2px solid ${theme.colors.accent};
    }
    
    button {
        background-color: unset;        
        border: none;
        cursor: pointer;
    }
    
    section{
        background-color: ${theme.colors.primaryBg};
    }
    
    
    // section:nth-of-type(odd){
    // background-color: ${theme.colors.primaryBg};
    // }
    // section:nth-of-type(even){
    //     background-color: ${theme.colors.secondaryBg};
    // }

`