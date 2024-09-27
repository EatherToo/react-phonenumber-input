import {
  formatChinesePhoneNumber,
  formatHongKongPhoneNumber,
} from '../../src/utils/format'

describe('format', () => {
  it('chinese phone number', () => {
    let phone = '13800138000'
    expect(formatChinesePhoneNumber(phone)).toBe('138 0013 8000')
    phone = '07946213190'
    expect(formatChinesePhoneNumber(phone)).toBe('0794 6213190')
    phone = '010-1234567'
    expect(formatChinesePhoneNumber(phone)).toBe('010 1234567')
    phone = '0794645213190'
    expect(formatChinesePhoneNumber(phone)).toBe('0794645213190')
  })

  it('chinese hongkong phone number', () => {
    let phone = '94936269'
    expect(formatHongKongPhoneNumber(phone)).toBe('9493 6269')

    phone = '949362691'
    expect(formatHongKongPhoneNumber(phone)).toBe('9493 62691')

    phone = '1213445'
    expect(formatHongKongPhoneNumber(phone)).toBe('1213445')
  })
})
