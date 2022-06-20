import React from "react";
import { InputBoxStyle, FormFeedBackStyled } from "./inputbox.style";

function InputBox({ Children, errormsg = "", error = false, ...rest }) {
  return (
    <>
      <InputBoxStyle {...rest}>{Children}</InputBoxStyle>
      <FormFeedBackStyled error={error}>{errormsg}</FormFeedBackStyled>
    </>
  );
}

export default InputBox;
