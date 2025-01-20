import React from 'react';
import {Icon} from "./Icon";
import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SocialList = () => {
    return (
        <SocialIconList>
            <SocialItem>
                <SocialIconLink href={'https://www.facebook.com/'}>
                    <Icon width={'32px'} height={'32px'} viewBox={'0 0 32px 32px'} iconId={'facebookSvg'}></Icon>
                </SocialIconLink>
            </SocialItem>
            <SocialItem>
                <SocialIconLink href={'https://www.instagram.com/'}>
                    <Icon width={'32px'} height={'32px'} viewBox={'0 0 32px 32px'} iconId={'instagramSvg'}></Icon>
                </SocialIconLink>
            </SocialItem>
            <SocialItem>
                <SocialIconLink href={'https://dribbble.com/'}>
                    <Icon width={'32px'} height={'32px'} viewBox={'0 0 32px 32px'} iconId={'dribbbleSvg'}></Icon>
                </SocialIconLink>
            </SocialItem>
            <SocialItem>
                <SocialIconLink href={'https://idc.md/mobile/sms'}>
                    <Icon width={'32px'} height={'32px'} viewBox={'0 0 32px 32px'} iconId={'smsSvg'}></Icon>
                </SocialIconLink>
            </SocialItem>
        </SocialIconList>
    );
};



const SocialIconList = styled.ul`
    display: flex;
    gap: 16px;

    
    @media ${theme.media.mobile} {
    display: none;
}
    @media ${theme.media.tablet} {
        display: none;
    }

    }
`

const SocialItem = styled.li``

const SocialIconLink = styled.a`
    display: flex;
    color: ${theme.colors.accent};


    &:hover {
        color: ${theme.colors.lightAccent};
        transform: translateY(-4px);
    }


`