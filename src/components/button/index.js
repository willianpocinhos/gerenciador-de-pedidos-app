import React from "react";
import { ButtonStyle } from "./style";

const Button = ({children, ...props}) => <ButtonStyle {...props}>{children}</ButtonStyle>

export default Button