class Calculator {

    constructor() {
        this.result = 0;
        this.rawInput ='';
    }

    processInput() {
        if (this.rawInput === '') return null;

        let input = this.rawInput;
        let x = null;
        let y = null;
        let op = null;
        let buffer = '';
        let prevChar = '';
        
        //increment through string
        while (input.length > 0) {
            const char = input[0];
            
            //if its a number or comma
            if (!Number.isNaN(parseInt(char)) || char === '.') {
                buffer += char;
            } 
            //check if its a negative number
            else if (char === '-' && Number.isNaN(parseInt(prevChar))) {
                buffer += char;
            }
            //if its not a number = first operand or end of expression
            else if (Number.isNaN(parseInt(char)) && char !== '.'){
                if (x === null) { //first operand
                    op = char;
                    
                    x = parseInt(buffer);
                    buffer = '';
                } 
                else if (buffer !== ''){ 
                    y = parseInt(buffer);
                    buffer='';
                    break;
                }
            }

            prevChar = char; //keep that one to find negative numbers
            input = input.slice(1); //remove first char
        }

        //there was only one operand, 
        if (y === null && buffer !== '') {
            y = parseInt(buffer);
            buffer = '';
        }

        //input is invalid
        if (x === null || op === null || y === null) {
            return null;
        }

        this.rawInput = input;
        return {x: x, y: y, op: op};
    }

    add(x, y) { 
        if (Number.isNaN(x) || Number.isNaN(y)) return 'ERROR';
        
        this.result = x + y;
        return this.result;
    }
    subtract(x, y) {
        if (Number.isNaN(x) || Number.isNaN(y)) return 'ERROR';
        
        this.result = x - y;
        return this.result;
    }
    multiply(x, y) {
        if (Number.isNaN(x) || Number.isNaN(y)) return 'ERROR';

        this.result = x * y;
        return this.result;
    }
    divide(x, y) {
        if (Number.isNaN(x) || Number.isNaN(y)) return 'ERROR';
        if (y === 0) return 'DIV BY 0';
        
        this.result = x / y;
        return this.result;
    }

    operate() {
        //sanity check
        //empty string
        if (this.rawInput === '') return; 
        //expression ends with operation -> invalid
        if (Number.isNaN(parseInt(this.rawInput[this.rawInput.length-1]))) {
            this.rawInput = this.rawInput.slice(0, this.rawInput.length-1);
            return;
        }
        const {x, y, op} = this.processInput();


        switch(op) {
            case '+':
                this.result = this.add(x, y);
                break;
            case '-':
                this.result = this.subtract(x,y);
                break;
            case '*':
                this.result = this.multiply(x,y);
                break;
            case '/':
                this.result = this.divide(x,y);
                break;
            default:
                this.result = 0;
                alert ('Invalid Input');
        }

        if (this.rawInput !== '') {
            let s = this.result.toString();
            s += this.rawInput;
            this.rawInput = s;
        }
        return this.result;
    }
}