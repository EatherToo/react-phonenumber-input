export const formatChinesePhoneNumber = (phoneNumber: string): string => {
  const cleanedNumber = phoneNumber.replace(/\D/g, '') // 去除非数字字符
  let formattedNumber = ''
  if (
    (cleanedNumber.length === 10 || cleanedNumber.length === 11) &&
    cleanedNumber.startsWith('0')
  ) {
    const threeCode = [
      '010', // 北京
      '020', // 广州
      '021', // 上海
      '022', // 天津
      '023', // 重庆
      '024', // 沈阳
      '025', // 南京
      '027', // 武汉
      '028', // 成都
      '029', // 西安
    ]
    let landlinePattern: RegExp
    if (threeCode.includes(cleanedNumber.slice(0, 3))) {
      // 格式化固定电话号码
      landlinePattern = /^(\d{3})(\d{7})$/
    } else {
      // 格式化固定电话号码
      landlinePattern = /^(\d{4})(\d{7})$/
    }
    formattedNumber = cleanedNumber.replace(landlinePattern, '$1 $2')
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
