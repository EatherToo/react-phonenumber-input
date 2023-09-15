import React from 'react'
import './react-phonenumber-input.css'
import { PhoneNumberInputElementProps } from '../../type'

export default function Input(props: PhoneNumberInputElementProps) {
  return (
    <input
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className="react-phonenumber-input_input"
      placeholder={props.placeholder}
    />
  )
}
