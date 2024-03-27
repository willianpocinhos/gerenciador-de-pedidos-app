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

export const Notification = styled.div`
    position: fixed;
    top: 380px;
    background: radial-gradient(circle, rgba(255, 255, 255, .5), rgba(40, 40, 38, .5));
    backdrop-filter: blur(3px);
    padding: 120px 50px;
    border-radius: 30px;
    font-size: 26px;
    font-weight: 600;
    color: #fff;
    text-align: center;
`