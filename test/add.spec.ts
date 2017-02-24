import { expect } from 'chai';
import { add } from '../lib/ts-library-boilerplate';

describe('# add', () => {
    it('shoudl add two numbers', () => {
        expect(add(3, 5)).to.equal(8);
    });
});
