import { expect } from 'chai';
import { divide } from '../lib';

describe('# add', () => {
    it('should add two numbers', () => {
        expect(divide(64, 8)).to.equal(8);
    });
});
