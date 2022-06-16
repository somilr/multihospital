import React from 'react';
import { InputBoxstyled ,FormFeedback } from './inputBox.Style';

function inputBox({childern , ...rest}) {
    return (
       <>
            <InputBoxstyled {... rest }> 
            {childern}
            </InputBoxstyled>
            <FormFeedback>

            </FormFeedback>

       </>
    );
}

export default inputBox;