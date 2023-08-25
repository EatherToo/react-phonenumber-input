export const formatChinesePhoneNumber = (phoneNumber: string): string => {
  const cleanedNumber = phoneNumber.replace(/\D/g, '') // 去除非数字字符
  let formattedNumber = ''
  if (cleanedNumber.length === 10) {
    // 格式化固定电话号码
    const landlinePattern = /^(\d{4})(\d{2})(\d{4})$/
    formattedNumber = cleanedNumber.replace(landlinePattern, '$1 $2 $3')
  } else if (cleanedNumber.length === 11) {
    // 格式化手机号码
    const mobilePattern = /^(\d{3})(\d{4})(\d{4})$/
    formattedNumber = cleanedNumber.replace(mobilePattern, '$1 $2 $3')
  } else {
    return cleanedNumber
  }

  return formattedNumber
}

export const formatHongKongPhoneNumber = (phoneNumber: string): string => {
  const cleanedNumber = phoneNumber.replace(/\D/g, '') // 去除非数字字符
  let formattedNumber = ''

  if (cleanedNumber.length === 8) {
    // 格式化固定电话号码
    const landlinePattern = /^(\d{4})(\d{4})$/
    formattedNumber = cleanedNumber.replace(landlinePattern, '$1 $2')
  } else if (cleanedNumber.length === 9) {
    // 格式化手机号码
    const mobilePattern = /^(\d{4})(\d{5})$/
    formattedNumber = cleanedNumber.replace(mobilePattern, '$1 $2')
  } else {
    return cleanedNumber
  }

  return formattedNumber
}
