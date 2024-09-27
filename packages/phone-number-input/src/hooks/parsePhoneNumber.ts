import { CountryCode } from '../type'
import parsePhoneNumber from '../utils/format'
import useMemoizedFn from './useMemoizedFn'
import {
  getCountryCallingCode,
  parsePhoneNumber as parsePhoneNumberLibPhoneNumber,
} from 'libphonenumber-js'

type ParsePhoneNumberFunc = (
  pNo: string,
  cCode: CountryCode
) => {
  countyCallingCode: string
  countryCode: CountryCode
  nationalNumber: string
  formattedNationalNumber: string
}

export function useParsePhoneNumberLibPhoneNumber(): ParsePhoneNumberFunc {
  return useMemoizedFn((pNo: string, cCode: CountryCode) => {
    if (pNo.startsWith('+')) {
      const parsedPhoneNumber = parsePhoneNumberLibPhoneNumber(pNo)
      return {
        countyCallingCode: parsedPhoneNumber.countryCallingCode,
        countryCode: parsedPhoneNumber.country || cCode,
        nationalNumber: parsedPhoneNumber.nationalNumber,
        formattedNationalNumber: parsedPhoneNumber.formatNational(),
      }
    }

    const parsedPhoneNumber = parsePhoneNumberLibPhoneNumber(
      '+' + getCountryCallingCode(cCode) + pNo
    )
    return {
      countyCallingCode: parsedPhoneNumber.countryCallingCode,
      countryCode: parsedPhoneNumber.country || cCode,
      nationalNumber: parsedPhoneNumber.nationalNumber,
      formattedNationalNumber: parsedPhoneNumber.formatNational(),
    }
  })
}
