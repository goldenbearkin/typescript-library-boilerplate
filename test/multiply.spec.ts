import { expect } from 'chai';
import { describe } from 'mocha';
import { multiply } from '../lib';

describe('# minus', () => {
    it('should minus two numbers', () => {
        expect(multiply(4, 7)).to.equal(28);
    });
});
