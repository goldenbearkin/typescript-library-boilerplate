import { expect } from 'chai';
import { divide } from '../lib/ts-library-boilerplate';

describe('# add', () => {
    it('shoudl add two numbers', () => {
        expect(divide(64, 8)).to.equal(8);
    });
});
