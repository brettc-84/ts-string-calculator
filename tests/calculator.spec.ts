import { Calculator } from "../src/calculator";

describe('String calculator', () => {
    describe('add function', () => {
        let calc: Calculator;
        beforeAll(() => {
            calc = new Calculator();
        });
        it('should return 0 for empty string', () => {
            expect(calc.add("")).toEqual(0);
        });
        it('should return 2 for string 2', () => {
            expect(calc.add("2")).toEqual(2);
        });
        it('should return 3 for string 1,2', () => {
            expect(calc.add("1,2")).toEqual(3);
        });
        it('should return 6 for 1,2,3', () => {
            expect(calc.add("1,2,3")).toEqual(6);
        });
        it('should return 6 for numbers split by newline 1\\n2,3', () => {
            expect(calc.add("1\n2,3")).toEqual(6);
        });
        it('should return 6 for numbers split by custom delimeter', () => {
            expect(calc.add("//;\n3;3")).toEqual(6);
        });
        it('should throw an exception when adding a negative number', () => {
            expect(() => calc.add("1,-5,3,-4")).toThrow("negatives not allowed: -5,-4");
        });
        it('should ignore numbers larger than 1000', () => {
            expect(calc.add("1,2,1003")).toEqual(3);
        });
        it('should work with any length delimiter', () => {
            expect(calc.add("//[***]\n1***2***3")).toEqual(6);
        });
        it('should work with multiple custom delimiters', () => {
            expect(calc.add("//[*][%]\n1*2%3")).toEqual(6);
        });
    })
});
