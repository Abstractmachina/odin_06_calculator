const c = new Calculator();

class Controller {

    

    constructor(){
        this.model = new Calculator();
        this.view = new View();

        this.app = document.querySelector('#root');


        //create display
        this.displayContainer = document.createElement('div');
        this.displayContainer.setAttribute('id', 'displayContainer');

        this.topline = document.createElement('h2');
        this.topline.setAttribute('id', 'topline');
        this.topline.textContent = '';
        this.bottomline = document.createElement('h1');
        this.bottomline.setAttribute('id', 'bottomLine');
        this.bottomline.textContent = '0';
        this.displayContainer.append(this.topline, this.bottomline);

        //create inputs
        this.inputContainer = document.createElement('div');
        this.inputContainer.setAttribute('id', 'inputContainer');
        for (let i = 0; i < 10; i++) {
            const b = document.createElement('button');
            b.textContent = i.toString();
            b.setAttribute('id', 'btn' + i.toString());
            b.classList.add('button');
            
            this.inputContainer.appendChild(b);
            b.addEventListener('click', () => {
                this.topline.textContent += i.toString();
            });
            //set columns
            if (i === 1 || i === 4 || i === 7) {
                    b.style.gridColumn = '1/2';  
            }
            else if (i === 0 || i === 2 || i === 5 || i === 8) {
                b.style.gridColumn = '2/3';
            }
            else {
                b.style.gridColumn = '3/4';
            }

            //set rows
            if (i === 0) b.style.gridRow = '5/5';    

            if (i === 1 || i === 2 || i === 3) {
                b.style.gridRow = '4/5';    
            }
            if (i === 4 || i === 5 || i === 6) {
                b.style.gridRow = '3/4';    
            }
            if (i === 7 || i === 8 || i === 9) {
                b.style.gridRow = '2/3';    
            }

        
        }
        this.btn_point = document.createElement('button');
        this.btn_point.textContent = '.';
        this.btn_point.setAttribute('id', 'btnPoint');
        this.btn_point.classList.add('button');
        this.btn_point.style.gridColumn = '1/1';
        this.btn_point.style.gridRow = '5/5';
        this.inputContainer.appendChild(this.btn_point);
        this.btn_point.addEventListener('click', (e) => {
            this.topline.textContent += '.';
        });

        //create buttons
        //addition
        this.btn_add = document.createElement('button');
        this.btn_add.textContent = '+';
        this.btn_add.setAttribute('id', 'btnPlus');
        this.btn_add.classList.add('button');
        this.btn_add.style.gridColumn = '4/4';
        this.btn_add.style.gridRow = '2/3';
        this.inputContainer.appendChild(this.btn_add);
        this.btn_add.addEventListener('click', (e) => {
            this.topline.textContent += '+';
        });

        //subtraction
        this.btn_minus = document.createElement('button');
        this.btn_minus.textContent = '-';
        this.btn_minus.setAttribute('id', 'btnMinus');
        this.btn_minus.classList.add('button');
        this.btn_minus.style.gridColumn = '4/4';
        this.btn_minus.style.gridRow = '3/4';
        this.inputContainer.appendChild(this.btn_minus);
        this.btn_minus.addEventListener('click', (e) => {
            this.topline.textContent += '-';
        });

        //multiplication
        this.btn_mult = document.createElement('button');
        this.btn_mult.textContent = '*';
        this.btn_mult.setAttribute('id', 'btnMult');
        this.btn_mult.classList.add('button');
        this.btn_mult.style.gridColumn = '3/4';
        this.btn_mult.style.gridRow = '1/2';
        this.inputContainer.appendChild(this.btn_mult);
        this.btn_mult.addEventListener('click', (e) => {
            this.topline.textContent += '*';
        });

        //division
        this.btn_div = document.createElement('button');
        this.btn_div.textContent = '/';
        this.btn_div.setAttribute('id', 'btnDiv');
        this.btn_div.classList.add('button');
        this.btn_div.style.gridColumn = '4/4';
        this.btn_div.style.gridRow = '1/2';
        this.inputContainer.appendChild(this.btn_div);
        this.btn_div.addEventListener('click', (e) => {
            this.topline.textContent += '/';
        });

        //compute
        this.btn_result = document.createElement('button');
        this.btn_result.textContent = '=';
        this.btn_result.setAttribute('id', 'btnResult');
        this.btn_result.classList.add('button');
        this.btn_result.style.gridColumn = '4/4';
        this.btn_result.style.gridRow = '4/6';
        
        this.inputContainer.appendChild(this.btn_result);
        this.btn_result.addEventListener('click', (e) => {
            // this.topline.textContent += '+';
            this.model.rawInput = this.topline.textContent;
            this.model.operate();
            this.bottomline.textContent = this.model.result;
            this.topline.textContent = this.model.rawInput;
        });

        //clear
        this.btn_clear = document.createElement('button');
        this.btn_clear.textContent = 'C';
        this.btn_clear.setAttribute('id', 'btnResult');
        this.btn_clear.classList.add('button');
        this.btn_clear.style.gridColumn = '1/3';
        this.btn_clear.style.gridRow = '1';
        this.btn_clear.style.backgroundColor = 'rgb(190, 0, 0)';
        this.inputContainer.appendChild(this.btn_clear);
        this.btn_clear.addEventListener('click', (e) => {
            this.topline.textContent = '';
            this.bottomline.textContent = '';
            this.model.rawInput = '';
            this.model.result = 0;
        });

        //erase
        this.btn_delete = document.createElement('button');
        this.btn_delete.textContent = 'DEL';
        this.btn_delete.setAttribute('id', 'btnDelete');
        this.btn_delete.classList.add('button');
        this.btn_delete.style.gridColumn = '3/3';
        this.btn_delete.style.gridRow = '5';
        this.inputContainer.appendChild(this.btn_delete);
        this.btn_delete.addEventListener('click', (e) => {
            this.topline.textContent = '';
            this.bottomline.textContent = '';
            this.model.rawInput = '';
            this.model.result = 0;
        });


        this.app.append(this.displayContainer, this.inputContainer);
    }

}

const app = new Controller();