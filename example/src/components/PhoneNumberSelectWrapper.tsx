import { PhoneNumberInputWrapperProps } from 'react-phonenumber-text-input'

const PhoneNumberInputWrapper: React.FC<PhoneNumberInputWrapperProps> = (
  props
) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {props.children}
    </div>
  )
}

export default PhoneNumberInputWrapper
