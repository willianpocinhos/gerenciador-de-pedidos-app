import React from "react";
import { ContainerStyle, Blur } from "./style";

const Container = props => {
    return <ContainerStyle><Blur>{props.children}</Blur></ContainerStyle>
}

export default Container