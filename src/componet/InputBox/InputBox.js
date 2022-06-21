import React from 'react'
import { FormFeebackstyled, InputBoxstyled } from './inputbox.style'

export default function InputBox({children ,errors=false, errorMessages='', ...rest}){
  return (
    <>
    <InputBoxstyled {...rest}>
        {children}
    </InputBoxstyled>
    <FormFeebackstyled error={errors}>
        {errorMessages}
    </FormFeebackstyled>
    </>
  )
}