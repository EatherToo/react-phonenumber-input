import React from 'react'

import PhoneNumberInputWrapper from './components/PhoneNumberInputWrapper/PhoneNumberInputWrapper'
import Input from './components/Input/Input'
import CallingCode from './components/CallingCode/CallingCode'
import BaseReactPhonenumberInput from './components/BaseReactPhoneNumberInput/BaseReactPhoneNumberInput'
import { PhoneNumberSelectProps, ReactPhonenumberInputProps } from './type'
import SearchSelect from './components/SearchSelect/SearchSelect'

const NoBorderSerachSelect = (props: PhoneNumberSelectProps) => {
  return <SearchSelect {...props} border={false} />
}
const PhonenumberInput: React.FC<ReactPhonenumberInputProps> = (
  props: ReactPhonenumberInputProps
) => {
  return (
    <BaseReactPhonenumberInput
      {...props}
      WrapperComponent={PhoneNumberInputWrapper}
      SelectComponent={NoBorderSerachSelect}
      InputComponent={Input}
      CallingCodeComponent={CallingCode}
    />
  )
}

export default PhonenumberInput
