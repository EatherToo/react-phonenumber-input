import React from 'react'
import './PhoneNumberInputWrapper.css'
import { PhoneNumberInputWrapperProps } from '../../types/type'

const PhoneNumberInputWrapper: React.FC<PhoneNumberInputWrapperProps> = (
  props: PhoneNumberInputWrapperProps
) => {
  return (
    <div
      style={props.style}
      className={`react-phonenumber-input_wrapper ${props.className || ''} ${
        props.isInValid ? 'react-phonenumber-input_wrapper--invalid' : ''
      }`}
    >
      {props.children}
    </div>
  )
}
export default PhoneNumberInputWrapper
