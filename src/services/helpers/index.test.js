import moment from 'moment'
import helper from './index'

describe('date()', () => {
  it('should format date with selected format', () => {
    // Arrange
    const date = '2022-05-22'
    const format = 'DD MMM YYYY'
    const expected = '22 May 2022'

    // Act
    const act = helper.date(date, format)

    // Assert
    expect(act).toBe(expected)
  })

  it('should format date with default format when there is no date or format or both', () => {
    // Arrange
    const date = '2022-05-22'
    const expected_without_format = '2022-05-22'
    const expected_without_date_and_format = moment().format('YYYY-MM-DD')

    // Act
    const act_without_format = helper.date(date)
    const act_without_date_and_format = helper.date()

    // Assert
    expect(act_without_format).toBe(expected_without_format)
    expect(act_without_date_and_format).toBe(expected_without_date_and_format)
  })

  it('should failed whene date is invalid', () => {
    // Act
    const act = helper.date('')

    // Assert
    expect(act).toBe('Invalid date')
  })
})
