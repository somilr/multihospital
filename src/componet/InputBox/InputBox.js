import React from "react";
import { InputBoxStyle, FormFeedStyled } from "./inputbox.style";

function InputBox({ children, errorMessages = "", errors = false, ...rest }) {
  return (
    <>
      <InputBoxStyle {...rest}>
        {children}
        </InputBoxStyle>
      <FormFeedStyled error={errors}>
        {errorMessages}
        </FormFeedStyled>

    </>
  );
}

export default InputBox;
