import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe('String calculator', () => {
    describe('add function', () => {
        let calc: Calculator;
        beforeAll(() => {
            calc = new Calculator();
        });
        it('should return 0 for empty string', () => {
            expect(calc.add("")).equal(0);
        });
        it('should return 2 for string 2', () => {
            expect(calc.add("2")).equal(2);
        });
        it('should return 3 for string 1,2', () => {
            expect(calc.add("1,2")).equal(3);
        });
    })
});
