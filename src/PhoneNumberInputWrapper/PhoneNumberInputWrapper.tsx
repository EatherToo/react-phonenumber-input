import React from 'react'
import './PhoneNumberInputWrapper.css'

export type PhoneNumberInputWrapperProps = {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

const PhoneNumberInputWrapper: React.FC<PhoneNumberInputWrapperProps> = (
  props
) => {
  return (
    <div
      style={props.style}
      className={`react-phonenumber-input_wrapper ${props.className || ''}`}
    >
      {props.children}
    </div>
  )
}
export default PhoneNumberInputWrapper
