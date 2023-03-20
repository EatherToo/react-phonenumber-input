import React, { useCallback, useEffect, useState } from 'react'
import './react-phonenumber-input.css'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import {
  getCountryCallingCode,
  CountryCode,
  isValidPhoneNumber,
  parsePhoneNumber,
} from 'libphonenumber-js'
import PhoneNumberInputWrapper from './PhoneNumberInputWrapper/PhoneNumberInputWrapper'
export { CountryCode } from 'libphonenumber-js'

export type PhonenumberChangeEventHandle = (
  v: string,
  options: {
    formated: string
    valid: boolean
  }
) => void
export type ReactPhonenumberInputProps = {
  countries?: CountryCode[]
  defaultCountry?: CountryCode
  className?: string
  style?: React.CSSProperties
  value?: string
  onChange?: PhonenumberChangeEventHandle
}

const ReactPhonenumberInput: React.FC<ReactPhonenumberInputProps> = (
  props: ReactPhonenumberInputProps
) => {
  const [valueInner, setValueInner] = useState(props.value || '')
  const [countryCode, setCountryCode] = useState(props.defaultCountry!)

  /**
   * @param pNo phone number
   * @param cCode country code
   */
  const handlePhonenumberChange = useCallback(
    (pNo: string, cCode: CountryCode) => {
      if (isValidPhoneNumber(pNo, cCode)) {
        const phonenumber = parsePhoneNumber(pNo, cCode)
        const formatedPhone = phonenumber.formatInternational()
        setValueInner(formatedPhone)
        props.onChange?.(phonenumber.nationalNumber, {
          valid: true,
          formated: formatedPhone,
        })
      } else {
        props.onChange?.(pNo, {
          valid: false,
          formated: '',
        })
      }
    },
    []
  )

  useEffect(() => {
    handlePhonenumberChange(valueInner, countryCode)
  }, [valueInner, countryCode])

  useEffect(() => {
    setValueInner(props.value || '')
  }, [props.value])

  return (
    <PhoneNumberInputWrapper style={props.style} className={props.className}>
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
      <span className="react-phonenumber-input_calling-code">
        +{getCountryCallingCode(countryCode)}
      </span>
      <input
        value={valueInner}
        onChange={(e) => setValueInner(e.target.value)}
        className="react-phonenumber-input_input"
      />
    </PhoneNumberInputWrapper>
  )
}

ReactPhonenumberInput.defaultProps = {
  countries: ['CN', 'HK', 'RU'],
  defaultCountry: 'CN',
}

export default ReactPhonenumberInput
