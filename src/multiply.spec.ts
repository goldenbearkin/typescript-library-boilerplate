import { expect } from 'chai'
import { multiply } from '.'

describe('# multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(4, 7)).to.equal(28)
  })
})
