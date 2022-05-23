export const getDaysArray = (function (year, month) {
  const names = Object.freeze(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'])
  return (year, month) => {
    const monthIndex = month - 1
    const date = new Date(year, monthIndex, 1)
    const result = []
    while (date.getMonth() == monthIndex) {
      result.push({
        fullDate: `${year}-${month}-${
          date.getDate().toString().length === 1 ? 0 + date.getDate().toString() : date.getDate()
        }`,
        date: date.getDate(),
        day: names[date.getDay()],
      })
      date.setDate(date.getDate() + 1)
    }
    return result
  }
})()

export const getConstructionEventColor = (type) => {
  if (type === 'Acquisition') {
    return '#FF4A4A'
  } else if (type === 'Construction') {
    return '#FFC327'
  } else if (type === 'Note') {
    return '#59DE6E'
  } else if (type === 'Buy Note') {
    return '#4ADEFF'
  } else if (type === 'Reedem Note') {
    return '#257BFF'
  } else if (type === 'Infusion') {
    return '#FB25FF'
  } else {
    return '#ffffff'
  }
}

export const currencyFormat = (num) => {
  return Number(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
