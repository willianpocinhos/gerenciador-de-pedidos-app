import React, {forwardRef} from "react";
import { InputStyle } from "./style";

const Input = forwardRef( (props, ref) => <InputStyle ref={ref}></InputStyle>)

export default Input