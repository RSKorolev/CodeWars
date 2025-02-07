function getAverage(marks) {
  let sum = 0
  for (const item of marks) {
    sum += item
  }
  return Math.floor(sum / marks.length)
}