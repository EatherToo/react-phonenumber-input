import { CountryCode } from '../type'
import parsePhoneNumber from '../utils/format'
import useMemoizedFn from './useMemoizedFn'
import {
  getCountryCallingCode,
  parsePhoneNumber as parsePhoneNumberLibPhoneNumber,
} from 'libphonenumber-js'

type ParsePhoneNumberFunc = (pNo: string, cCode: CountryCode) => string

export function useParsePhoneNumber(): ParsePhoneNumberFunc {
  return parsePhoneNumber
}

export function useParsePhoneNumberLibPhoneNumber(): ParsePhoneNumberFunc {
  return useMemoizedFn((pNo: string, cCode: CountryCode) => {
    const parsedPhoneNumber = parsePhoneNumberLibPhoneNumber(
      getCountryCallingCode(cCode) + pNo
    )
    return parsedPhoneNumber.formatNational()
  })
}
