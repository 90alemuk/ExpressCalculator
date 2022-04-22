import percentage from '../../modules/calculation/util/percentage.js'

describe('percentage.js unit test', () => {

  it('should return 50 given 1 and 2', () => {
    expect(percentage(1, 2)).toBe(50)
  })

})