import { PhoneNumberInputElementProps } from 'react-phonenumber-text-input'
import { Input } from 'antd'

const AntInput: React.FC<PhoneNumberInputElementProps> = (props) => {
  return (
    <Input
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
    />
  )
}

export default AntInput
