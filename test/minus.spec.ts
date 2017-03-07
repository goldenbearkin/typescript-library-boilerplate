import { expect } from 'chai';
import { minus } from '../lib';

describe('# minus', () => {
    it('shoudl minus two numbers', () => {
        expect(minus(10, 2)).to.equal(8);
    });
});
