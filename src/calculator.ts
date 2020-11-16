export class Calculator {
    constructor() {};

    public add(numbers: string): number {
        if (numbers.length === 0) {
            return 0;
        } else {
            return this.splitToNumberArray(numbers).reduce((i,k) => i+k);
        }
    }

    private splitToNumberArray(numberString: string): number[] {
        return numberString.split(/,|\n/).map(n => +n);
    }
}
