import { expect } from 'chai';
import { describe } from 'mocha';
import { minus } from '../lib';

describe('# minus', () => {
    it('should minus two numbers', () => {
        expect(minus(10, 2)).to.equal(8);
    });
});
