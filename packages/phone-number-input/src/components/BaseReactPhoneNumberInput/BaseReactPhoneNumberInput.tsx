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

  const [valueInner, setValueInner] = useState('')
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
        setIsInvalid(false)
        const {
          countyCallingCode,
          nationalNumber,
          formattedNationalNumber,
          countryCode: parsedCountryCode,
        } = parsePhoneNumber(pNo, cCode)
        setValueInner(formattedNationalNumber)
        props.onChange?.(pNo, {
          valid: true,
          formated: formattedNationalNumber,
          fullValue: '+' + countyCallingCode + nationalNumber,
        })

        if (countryCode !== parsedCountryCode) {
          setCountryCode(parsedCountryCode)
          props.onCountryCodeChange?.(parsedCountryCode)
        }
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
