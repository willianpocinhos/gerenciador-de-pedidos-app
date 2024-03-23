import styled from "styled-components";

export const Img = styled.img`
    width: 154px;
`

export const Link = styled.a`
    color: #9B7A50;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 16px;
    font-size: 14px;
    transition: .2s;

    &:hover{
        opacity: .8;
    }

    &:active{
        opacity: .5;
    }
`