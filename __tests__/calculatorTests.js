describe("Addition", () => {
    test("adding two positive numbers", () => {
        const calcutor = new Calculator();
        expect(calcutor.add(1,2)).toEqual(3);
    });
});