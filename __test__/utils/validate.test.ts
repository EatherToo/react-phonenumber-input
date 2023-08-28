import {
  validateChinesePhoneNumber,
  validateHongKongPhoneNumber,
} from '../../src/utils/validate'

import {
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumber,
} from 'libphonenumber-js'

describe('validate', () => {
  // it('chinese phone number', () => {
  //   let phone = '13800138000'
  //   expect(validateChinesePhoneNumber(phone)).toBe(true)
  //   phone = '010-1234567'
  //   expect(validateChinesePhoneNumber(phone)).toBe(true)
  //   phone = '07946213190'
  //   expect(validateChinesePhoneNumber(phone)).toBe(true)

  //   phone = '0794645213190'
  //   expect(validateChinesePhoneNumber(phone)).toBe(false)
  // })
  // it('chinese hongkong phone number', () => {
  //   let phone = '94936269'
  //   expect(validateHongKongPhoneNumber(phone)).toBe(true)
  //   phone = '1213445'
  //   expect(validateHongKongPhoneNumber(phone)).toBe(false)
  // })

  it('jdjd', () => {
    console.log(getCountryCallingCode('PR'))
  })
})
