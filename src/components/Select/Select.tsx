import { CountryCode } from 'libphonenumber-js/types'
import React from 'react'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import {
  PhoneNumberOptionProps,
  PhoneNumberSelectProps,
} from '../../types/type'

export function DefaultOptionComponent(props: PhoneNumberOptionProps) {
  return <option>{getUnicodeFlagIcon(props.countryCode)}</option>
}

export default function Select(props: PhoneNumberSelectProps) {
  return (
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
  )
}
