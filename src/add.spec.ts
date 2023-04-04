import { expect } from 'chai'
import { add } from '.'

describe('# add', () => {
  it('should add two numbers', () => {
    expect(add(3, 5)).to.equal(8)
  })
})
