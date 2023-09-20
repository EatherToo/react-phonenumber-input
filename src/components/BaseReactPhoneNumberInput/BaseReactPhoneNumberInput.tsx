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
  const [valueInner, setValueInner] = useState(props.value || '')
  const [countryCode, setCountryCode] = useState(
    props.defaultCountry || props.countries![0]
  )
  const [isInValid, setIsInValid] = useState(false)

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
        setIsInValid(false)
        const formatedPhone = parsePhoneNumber(pNo, cCode)
        setValueInner(formatedPhone)
        props.onChange?.(pNo, {
          valid: true,
          formated: formatedPhone,
          fullValue: '+' + getCountryCallingCode(cCode) + pNo,
        })
      } else {
        setIsInValid(pNo ? true : false)
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
    handlePhonenumberChange(props.value!, countryCode)
  }, [props.value, countryCode])
  return (
    <props.WrapperComponent
      style={props.style}
      isInValid={isInValid}
      className={props.className}
    >
      <props.SelectComponent
        countries={props.countries!}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        onCountryCodeChange={props.onCountryCodeChange}
        className={props.selectClassName}
        style={props.selectStyle}
        optionClassName={props.optionClassName}
        optionStyle={props.optionStyle}
      />
      {props.showCallingCode && (
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
BaseReactPhonenumberInput.defaultProps = {
  countries: allCountries,
  showCallingCode: true,
}

export default BaseReactPhonenumberInput
