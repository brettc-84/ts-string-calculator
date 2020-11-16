import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe('String calculator', () => {
    describe('add function', () => {
        let calc: Calculator;
        before(() => {
            calc = new Calculator();
        });
        it('should return 0 for empty string', () => {
            expect(calc.add("")).equal(0);
        });
    })
});
