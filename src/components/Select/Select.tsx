import { CountryCode } from 'libphonenumber-js/types'
import React, { useRef } from 'react'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { PhoneNumberOptionProps, PhoneNumberSelectProps } from '../../type'
import './Select.css'
export function DefaultOptionComponent(props: PhoneNumberOptionProps) {
  return (
    <option value={props.countryCode}>
      {getUnicodeFlagIcon(props.countryCode)} {props.countryCode}
    </option>
  )
}

export default function Select(props: PhoneNumberSelectProps) {
  return (
    <div className="react-phonenumber-input_select-wrapper">
      <select
        value={props.countryCode}
        onChange={(e) => {
          const cCode = e.target.value as CountryCode
          props.setCountryCode(e.target.value as CountryCode)
          props.onCountryCodeChange?.(cCode)
        }}
        className="react-phonenumber-input_select"
      >
        {props.countries!.map((c) => {
          return <DefaultOptionComponent key={c} countryCode={c} />
        })}
      </select>
    </div>
  )
}
