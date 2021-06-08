const colorTone = (color: string) => {
  return parseInt(color.slice(1), 16) < 8388607
}

export default colorTone
