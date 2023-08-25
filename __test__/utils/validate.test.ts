import { validateChinesePhoneNumber } from '../../src/utils/validate'

describe('validate', () => {
  it('chinese phone number', () => {
    const phone = '13800138000'
    expect(validateChinesePhoneNumber(phone)).toBe(true)
  })
})
