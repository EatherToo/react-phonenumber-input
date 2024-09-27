import React, { useCallback, useEffect, useState } from 'react'

import { getCountryCallingCode } from '../../utils/getCountryCallingCode'
import { useCheckPhoneValidLibPhoneNumber } from '../../hooks/checkValid'
import { useParsePhoneNumberLibPhoneNumber } from '../../hooks/parsePhoneNumber'
import {
  BasePhoneNumberInputProps,
  CountryCode,
  allCountries,
} from '../../type'

const BaseReactPhonenumberInput: React.FC<BasePhoneNumberInputProps> = (
  props: BasePhoneNumberInputProps
) => {
  const { countries = allCountries, showCallingCode = true } = props

  const [valueInner, setValueInner] = useState(props.value || '')
  const [countryCode, setCountryCode] = useState(
    props.defaultCountry || countries![0]
  )
  const [isInValid, setIsInvalid] = useState(false)

  const isValidPhoneNumber = useCheckPhoneValidLibPhoneNumber()
  const parsePhoneNumber = useParsePhoneNumberLibPhoneNumber()

  /**
   * @param pNo phone number
   * @param cCode country code
   */
  const handlePhonenumberChange = useCallback(
    (pNo: string, cCode: CountryCode) => {
      setValueInner(pNo)
      if (isValidPhoneNumber(pNo, cCode)) {
        debugger
        setIsInvalid(false)
        const formatedPhone = parsePhoneNumber(pNo, cCode)
        setValueInner(formatedPhone)
        props.onChange?.(pNo, {
          valid: true,
          formated: formatedPhone,
          fullValue: '+' + getCountryCallingCode(cCode) + pNo,
        })
      } else {
        setIsInvalid(pNo ? true : false)
        props.onChange?.(pNo, {
          valid: false,
          formated: '',
          fullValue: '+' + getCountryCallingCode(cCode) + pNo,
        })
      }
    },
    []
  )

  useEffect(() => {
    if (props.value === valueInner) {
      return
    }
    if (props.value !== undefined) {
      setValueInner(props.value)
      handlePhonenumberChange(props.value, countryCode)
    }
  }, [props.value, countryCode])
  return (
    <props.WrapperComponent
      style={props.style}
      isInValid={isInValid}
      className={props.className}
    >
      <props.SelectComponent
        countries={countries!}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        onCountryCodeChange={props.onCountryCodeChange}
        className={props.selectClassName}
        style={props.selectStyle}
        optionClassName={props.optionClassName}
        optionStyle={props.optionStyle}
      />
      {showCallingCode && (
        <props.CallingCodeComponent
          callingCode={'+' + getCountryCallingCode(countryCode)}
        />
      )}
      <props.InputComponent
        placeholder={props.placeholder}
        value={valueInner}
        onChange={(v) => handlePhonenumberChange(v, countryCode)}
        className={props.inputClassName}
        style={props.inputStyle}
      />
    </props.WrapperComponent>
  )
}

export default BaseReactPhonenumberInput
