import { CountryCode } from '../type'

export const validateChinesePhoneNumber = (phoneNumber: string): boolean => {
  const mobilePattern = /^1[3-9]\d{9}$/
  const landlinePattern = /^0[1-9]{1}\d{1,2}[-]?\d{6,7}$/

  return mobilePattern.test(phoneNumber) || landlinePattern.test(phoneNumber)
}

export const validateHongKongPhoneNumber = (phoneNumber: string): boolean => {
  const pattern = /^[569]\d{3}\d{4}$/
  return pattern.test(phoneNumber)
}

type ValidatePhoneNumberMap = {
  [key in CountryCode]: (phoneNumber: string) => boolean
}

export const validatePhoneNumber: Partial<ValidatePhoneNumberMap> = {
  CN: validateChinesePhoneNumber,
  HK: validateHongKongPhoneNumber,
}

const isValidPhoneNumber = (pNo: string, cCode: CountryCode) => {
  const cleanedNumber = pNo.replace(/\D/g, '')
  if (!validatePhoneNumber[cCode]) {
    return true
  }
  return validatePhoneNumber[cCode]!(cleanedNumber)
}

export default isValidPhoneNumber
