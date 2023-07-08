import React, { useCallback, useState } from 'react'
import {
  getCountryCallingCode,
  CountryCode,
  isValidPhoneNumber,
  parsePhoneNumber,
} from 'libphonenumber-js'
import { BasePhoneNumberInputProps } from '../../types/type'
export { CountryCode } from 'libphonenumber-js'

const BaseReactPhonenumberInput: React.FC<BasePhoneNumberInputProps> = (
  props: BasePhoneNumberInputProps
) => {
  const [valueInner, setValueInner] = useState(props.value || '')
  const [countryCode, setCountryCode] = useState(props.defaultCountry!)
  const [isInValid, setIsInValid] = useState(false)

  /**
   * @param pNo phone number
   * @param cCode country code
   */
  const handlePhonenumberChange = useCallback(
    (pNo: string, cCode: CountryCode) => {
      setValueInner(pNo)
      if (isValidPhoneNumber(pNo, cCode)) {
        setIsInValid(false)
        const phonenumber = parsePhoneNumber(pNo, cCode)
        const formatedPhone = phonenumber.formatNational()
        setValueInner(formatedPhone)
        props.onChange?.(phonenumber.nationalNumber, {
          valid: true,
          formated: formatedPhone,
        })
      } else {
        setIsInValid(true)
        props.onChange?.(pNo, {
          valid: false,
          formated: '',
        })
      }
    },
    []
  )

  return (
    <props.WrapperComponent
      style={props.style}
      isInValid={isInValid}
      className={props.className}
    >
      <props.SelectComponent
        countries={props.countries}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        onCountryCodeChange={props.onCountryCodeChange}
      />
      {props.showCallingCode && (
        <props.CallingCodeComponent
          callingCode={'+' + getCountryCallingCode(countryCode)}
        />
      )}
      <props.InputComponent
        value={valueInner}
        onChange={(v) => handlePhonenumberChange(v, countryCode)}
      />
    </props.WrapperComponent>
  )
}

export default BaseReactPhonenumberInput
