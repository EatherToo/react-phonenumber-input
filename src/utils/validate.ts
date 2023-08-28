export const validateChinesePhoneNumber = (phoneNumber: string): boolean => {
  const mobilePattern = /^1[3-9]\d{9}$/
  const landlinePattern = /^0[1-9]{1}\d{1,2}[-]?\d{6,7}$/

  return mobilePattern.test(phoneNumber) || landlinePattern.test(phoneNumber)
}

export const validateHongKongPhoneNumber = (phoneNumber: string): boolean => {
  const pattern = /^[569]\d{3}\d{4}$/
  return pattern.test(phoneNumber)
}
