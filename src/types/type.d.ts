export type PhonenumberChangeEventHandle = (
  v: string,
  options: {
    formated: string
    valid: boolean
  }
) => void

export type PhoneNumberInputWrapperProps = {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  isInValid?: boolean
}
export type ReactPhonenumberInputProps = {
  countries?: CountryCode[]
  defaultCountry?: CountryCode
  className?: string
  style?: React.CSSProperties
  value?: string
  showCallingCode?: boolean
  onChange?: PhonenumberChangeEventHandle
  onCountryCodeChange?: (c: CountryCode) => void
}

export type PhoneNumberCallingCodeProps = {
  callingCode: string
}

export type PhoneNumberInputElementProps = {
  value: string
  onChange: (value: string) => void
}
export type PhoneNumberSelectProps = {
  countries?: CountryCode[]
  countryCode: CountryCode
  setCountryCode: (c: CountryCode) => void
  onCountryCodeChange?: (c: CountryCode) => void
}
export type PhoneNumberOptionProps = { countryCode: CountryCode }

export type BasePhoneNumberInputProps = ReactPhonenumberInputProps & {
  SelectComponent: React.FC<PhoneNumberSelectProps>
  CallingCodeComponent: React.FC<PhoneNumberCallingCodeProps>
  InputComponent: React.FC<PhoneNumberInputElementProps>
  WrapperComponent: React.FC<PhoneNumberInputWrapperProps>
}
