import { expect } from 'chai';
import { describe } from 'mocha';
import { add } from '../lib';

describe('# add', () => {
    it('should add two numbers', () => {
        expect(add(3, 5)).to.equal(8);
    });
});
