const getDashValue = (radius: number, percentage: number): number => {
  const percent = percentage || 0

  const circumference = 2 * 3.1415927 * radius
  const percentageAsDecimal = (100 - percent) / 100
  return circumference * percentageAsDecimal
}

export default getDashValue
