import React, {  } from 'react';
import  InputBoxStyle from "../InputBox/inputboxstyle"
import  FormFeedBackStyled from "../InputBox/FormFeedBackStyled"

function InputBox({Children, errorr=false,...rest}) {
    return (
    
    <>

      <InputBoxStyle {... rest}>
      {Children}
       </InputBoxStyle>
       <FormFeedBackStyled>

       </FormFeedBackStyled>
    </>
    );
}

export default InputBox;