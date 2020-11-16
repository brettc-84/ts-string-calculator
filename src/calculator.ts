export class Calculator {
    constructor() {};

    public add(numbers: string): number {
        if (numbers.length === 0) {
            return 0;
        } else {
            const numberArray = this.splitToNumberArray(numbers);
            this.validateForNegativeNumbers(numberArray);
            return numberArray.reduce((i,k) => i + k);
        }
    }

    private splitToNumberArray(numberString: string): number[] {
        let delim = ",|\n";
        if (this.customDelim(numberString)) {
            [delim, numberString] = numberString.split("\n");
            delim = delim.substr(2, 3);
        }
        return numberString.split(new RegExp(delim)).map(n => +n).filter(n => n < 1000);
    }

    private customDelim(numberString: string): boolean {
        return numberString.startsWith("//");
    }

    private validateForNegativeNumbers(numberArr: number[]): void {
        const negativeNumbers = numberArr.filter(n => n < 0);
        if (negativeNumbers.length > 0) {
            throw "negatives not allowed: "+ negativeNumbers.join(",");
        }
    }
}
