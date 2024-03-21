import styled from "styled-components";

export const Img = styled.img`
    width: 96px;
`
export const List = styled.ul`
    width: 100%;
`

export const Order = styled.li`
    background-color: #6B6764;
    color: #fff;
    border-radius: 10px;
    width: 100%;
    height: 66px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3px;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    width: 100%;
    margin-right: 10px;
`

export const Description = styled.textarea`
    background-color: #6B6764;
    border: none;
    color: #fff;
    font-size: 10px;
    font-weight: 300;
    width: 100%;
    display: block;
    resize: none;
`

export const Client = styled.textarea`
    border: none;
    background-color: #6B6764;
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    width: 100%;
    display: block;
    resize: none;
    margin-top: 18px;
`

export const Icon = styled.div`
    color: #282826;
    cursor: pointer;
    transition: .2s;

    &:active{
        color: #fff;
    }
`

export const Msg = styled.p`
    color: #fff;
    text-align: center;
    font-weight: 200;
`




