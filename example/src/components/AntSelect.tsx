import {
  PhoneNumberSelectProps,
  getCountryCallingCode,
} from 'react-phonenumber-text-input'
import { Select } from 'antd'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

const AntSelect: React.FC<PhoneNumberSelectProps> = (props) => {
  return (
    <Select
      showSearch
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      style={{
        width: '144px',
      }}
      value={props.countryCode}
      options={props.countries.map((c) => {
        return {
          label: `${getUnicodeFlagIcon(c)} +${getCountryCallingCode(c)}`,
          value: c,
        }
      })}
      onChange={(v) => {
        props.onCountryCodeChange?.(v)
        props.setCountryCode(v)
      }}
    />
  )
}

export default AntSelect
