import React from 'react'

import PhoneNumberInputWrapper from './components/PhoneNumberInputWrapper/PhoneNumberInputWrapper'
import Select from './components/Select/Select'
import Input from './components/Input/Input'
import CallingCode from './components/CallingCode/CallingCode'
import { ReactPhonenumberInputProps } from './type'
import BaseReactPhonenumberInput from './components/BaseReactPhoneNumberInput/BaseReactPhoneNumberInput'

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

ReactPhonenumberInput.defaultProps = {
  countries: ['CN', 'HK', 'RU'],
  defaultCountry: 'CN',
  showCallingCode: true,
}

export default ReactPhonenumberInput
