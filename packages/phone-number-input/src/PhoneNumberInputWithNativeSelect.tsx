import React from 'react'

import PhoneNumberInputWrapper from './components/PhoneNumberInputWrapper/PhoneNumberInputWrapper'
import Input from './components/Input/Input'
import CallingCode from './components/CallingCode/CallingCode'
import BaseReactPhonenumberInput from './components/BaseReactPhoneNumberInput/BaseReactPhoneNumberInput'
import { ReactPhonenumberInputProps } from './type'
import Select from './components/Select/Select'

const PhoneNumberInputWithNativeSelect: React.FC<ReactPhonenumberInputProps> = (
  props: ReactPhonenumberInputProps
) => {
  return (
    <BaseReactPhonenumberInput
      {...props}
      WrapperComponent={PhoneNumberInputWrapper}
      SelectComponent={Select}
      InputComponent={Input}
      CallingCodeComponent={CallingCode}
    />
  )
}

export default PhoneNumberInputWithNativeSelect
