import { CountryCode } from '../type'
import isValidPhoneNumber from '../utils/validate'
import { isValidPhoneNumber as isValidPhoneNumberLibPhoneNumber } from 'libphonenumber-js'

type CheckPhoneValidFunc = (pNo: string, cCode: CountryCode) => boolean

export function useCheckPhoneValid(): CheckPhoneValidFunc {
  return isValidPhoneNumber
}

export function useCheckPhoneValidLibPhoneNumber(): CheckPhoneValidFunc {
  return isValidPhoneNumberLibPhoneNumber
}
