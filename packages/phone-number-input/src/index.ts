import PhoneNumberInputWithNativeSelect from './PhoneNumberInputWithNativeSelect'
import PhonenumberInput from './ReactPhoneNumberInput'
import SearchSelect from './components/SearchSelect/SearchSelect'
import BaseReactPhonenumberInput from './components/BaseReactPhoneNumberInput/BaseReactPhoneNumberInput'

export {
  type PhoneNumberCallingCodeProps,
  type PhonenumberChangeEventHandle,
  type PhoneNumberInputWrapperProps,
  type ReactPhonenumberInputProps,
  type PhoneNumberInputElementProps,
  type PhoneNumberSelectProps,
  type PhoneNumberOptionProps,
  type BasePhoneNumberInputProps,
  type CountryCode,
  allCountries,
} from './type'

export { getCountryCallingCode } from './utils/getCountryCallingCode'
export {
  formatChinesePhoneNumber,
  formatHongKongPhoneNumber,
} from './utils/format'
export {
  validateChinesePhoneNumber,
  validateHongKongPhoneNumber,
} from './utils/validate'

export { SearchSelect }
export { PhoneNumberInputWithNativeSelect }
export { BaseReactPhonenumberInput }
export default PhonenumberInput
