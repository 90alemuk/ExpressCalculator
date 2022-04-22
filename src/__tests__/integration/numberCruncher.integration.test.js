import numberCruncher from '../../modules/calculation/numberCruncher.js'

describe('numberCruncher.js integration test', () => {

  it('should return 50 when calculating percentage of 1 and 2', () => {
    const data = { numOne: 1, numTwo: 2, operator: 'percentage' }
    expect(numberCruncher(data)).toBe(50)
  })

})