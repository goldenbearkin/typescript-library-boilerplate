import { expect } from 'chai';
import { minus } from '../lib/ts-library-boilerplate';

describe('# minus', () => {
    it('shoudl minus two numbers', () => {
        expect(minus(10, 2)).to.equal(8);
    });
});
