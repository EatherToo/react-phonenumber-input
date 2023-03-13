import React, { useState } from 'react'
import './react-phonenumber-input.css'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { getCountryCallingCode, CountryCode } from 'libphonenumber-js'
export type ReactPhonenumberInputProps = {
  countries?: CountryCode[]
  defaultCountry?: CountryCode
}

const ReactPhonenumberInput: React.FC<ReactPhonenumberInputProps> = (
  props: ReactPhonenumberInputProps
) => {
  const [countryCode, setCountryCode] = useState(props.defaultCountry!)
  return (
    <div
      style={{
        width: '320px',
        height: '30px',
        margin: 'auto',
      }}
      className="react-phonenumber-input"
    >
      <div>
        <select
          value={countryCode}
          onChange={(e) => {
            setCountryCode(e.target.value as CountryCode)
          }}
          className="react-phonenumber-input_select"
        >
          {props.countries!.map((c) => {
            return (
              <option key={c} value={c}>
                {getUnicodeFlagIcon(c)}
              </option>
            )
          })}
        </select>
        <span>+{getCountryCallingCode(countryCode)}</span>
      </div>
    </div>
  )
}

ReactPhonenumberInput.defaultProps = {
  countries: ['CN', 'HK'],
  defaultCountry: 'CN',
}

export default ReactPhonenumberInput
