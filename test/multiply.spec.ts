import { expect } from 'chai';
import { multiply } from '../lib/ts-library-boilerplate';

describe('# minus', () => {
    it('shoudl minus two numbers', () => {
        expect(multiply(4, 7)).to.equal(28);
    });
});
