import React, { useCallback, useState } from 'react'

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
  const [countryCode, setCountryCode] = useState(props.defaultCountry!)
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
        props.onChange?.(`+${cCode}${pNo}`, {
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
        countries={props.countries!}
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
BaseReactPhonenumberInput.defaultProps = {
  countries: allCountries,
  defaultCountry: 'CN',
  showCallingCode: true,
}

export default BaseReactPhonenumberInput
