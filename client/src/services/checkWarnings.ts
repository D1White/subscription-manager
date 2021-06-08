const checkWarnings = (warnings: { [key: string]: boolean }): boolean => {
  let result = false

  for (const key in warnings) {
    if (warnings[key]) {
      result = true
    }
  }

  return result
}

export default checkWarnings
