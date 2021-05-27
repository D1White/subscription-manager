const getDashValue = (radius: number, percentage: number): number => {
  const circumference = 2 * 3.1415927 * radius
  const percentageAsDecimal = (100 - percentage) / 100
  return circumference * percentageAsDecimal
}

export default getDashValue
