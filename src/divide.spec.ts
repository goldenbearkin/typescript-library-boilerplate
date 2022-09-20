import { expect } from 'chai';
import { divide } from '.';

describe('# divide', () => {
    it('should divide two numbers', () => {
        expect(divide(64, 8)).to.equal(8);
    });
});
