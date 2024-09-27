import { CountryCode } from '../type'
import isValidPhoneNumber from '../utils/validate'
import { isValidPhoneNumber as isValidPhoneNumberLibPhoneNumber } from 'libphonenumber-js'
import useMemoizedFn from './useMemoizedFn'

type CheckPhoneValidFunc = (pNo: string, cCode: CountryCode) => boolean

export function useCheckPhoneValid(): CheckPhoneValidFunc {
  return isValidPhoneNumber
}

export function useCheckPhoneValidLibPhoneNumber(): CheckPhoneValidFunc {
  return useMemoizedFn((pNo: string, cCode: CountryCode) => {
    if (cCode === 'CN') {
      return isValidPhoneNumber(pNo, cCode)
    } else {
      return isValidPhoneNumberLibPhoneNumber(pNo, cCode)
    }
  })
}
