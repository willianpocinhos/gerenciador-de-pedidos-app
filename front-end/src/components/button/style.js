import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: #9B7A50;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: .2s;
    margin-top: 30px;

    &:hover{
        opacity: .8;
    }

    &:active{
        opacity: .5;
    }

    ${props => props.transparent &&`
        background-color: transparent;
        border: 1px solid #fff;
    `}
`