const Calculator = require('../Calculator')

describe("Addition", () => {
    const calculator = new Calculator();
    test("adding two positive numbers", () => {
        
        expect(calculator.add(1,2)).toEqual(3);
    });
});