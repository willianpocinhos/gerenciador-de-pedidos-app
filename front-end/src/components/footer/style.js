import styled from "styled-components";

export const FooterStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;

    p{
        color: #fff;
        font-size: 12px;
        font-weight: 200;

        a{
            font-weight: 600;
            cursor: pointer;
            transition: .1s;
            text-decoration: none;
            color: #fff;
        }
        
        a:hover{
            color: #9B7A50;
        }
    }
`
