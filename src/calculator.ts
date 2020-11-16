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
        let delim = ",|\n";
        if (this.customDelim(numberString)) {
            [delim, numberString] = numberString.split("\n");
            delim = delim.substr(2, 3);
        }
        return numberString.split(new RegExp(delim)).map(n => +n);
    }

    private customDelim(numberString: string): boolean {
        return numberString.startsWith("//");
    }
}
