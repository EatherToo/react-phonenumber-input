import React from 'react'

import PhoneNumberInputWrapper from './components/PhoneNumberInputWrapper/PhoneNumberInputWrapper'
import Select from './components/Select/Select'
import Input from './components/Input/Input'
import CallingCode from './components/CallingCode/CallingCode'
import BaseReactPhonenumberInput from './components/BaseReactPhoneNumberInput/BaseReactPhoneNumberInput'
import { ReactPhonenumberInputProps } from './type'

const ReactPhonenumberInput: React.FC<ReactPhonenumberInputProps> = (
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

export default ReactPhonenumberInput
