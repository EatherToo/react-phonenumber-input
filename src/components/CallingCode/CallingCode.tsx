import React from 'react'
import './PhoneNumberCallingCode.css'
import { PhoneNumberCallingCodeProps } from '../../type'

export default function CallingCode(props: PhoneNumberCallingCodeProps) {
  return (
    <div className="react-phonenumber-input_calling-code">
      {props.callingCode}
    </div>
  )
}
