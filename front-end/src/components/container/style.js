import styled from "styled-components";
import bg from "../../assets/bg.jpg"

export const ContainerStyle = styled.div`
    background: url(${bg}) no-repeat;
    background-size: cover;
    min-height: 100vh;
    backdrop-filter: blur(50px);
    background-position: center;
`

export const Blur = styled.div`
    background-color: RGBA(0, 0, 0, .8);
    backdrop-filter: blur(10px);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2%;
`