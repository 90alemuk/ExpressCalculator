import numberCruncher from '../../modules/calculation/numberCruncher.js'
import percentage from '../../modules/calculation/util/percentage.js'

jest.mock('../../modules/calculation/util/percentage.js')

describe('numberCruncher.js unit test', () => {

  it('should return 4 when adding 1 and 3', () => {
    const data = { numOne: 1, numTwo: 3, operator: 'add' }
    expect(numberCruncher(data)).toBe(4)
  })

  it('should call percentage with 1 and 3', () => {
    percentage.mockImplementation(() => null)
    const data = { numOne: 1, numTwo: 3, operator: 'percentage' }
    numberCruncher(data)
    expect(percentage.mock.calls[0][0]).toBe(1)
    expect(percentage.mock.calls[0][1]).toBe(3)
    expect(percentage.mock.results[0].value).toBe(null)
  })

})