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
        }
        this.btn_point = document.createElement('button');
        this.btn_point.textContent = '.';
        this.btn_point.setAttribute('id', 'btnPoint');
        this.btn_point.classList.add('button');
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
        this.inputContainer.appendChild(this.btn_add);
        this.btn_add.addEventListener('click', (e) => {
            this.topline.textContent += '+';
        });

        //subtraction
        this.btn_minus = document.createElement('button');
        this.btn_minus.textContent = '-';
        this.btn_minus.setAttribute('id', 'btnMinus');
        this.btn_minus.classList.add('button');
        this.inputContainer.appendChild(this.btn_minus);
        this.btn_minus.addEventListener('click', (e) => {
            this.topline.textContent += '-';
        });

        //multiplication
        this.btn_mult = document.createElement('button');
        this.btn_mult.textContent = '*';
        this.btn_mult.setAttribute('id', 'btnMult');
        this.btn_mult.classList.add('button');
        this.inputContainer.appendChild(this.btn_mult);
        this.btn_mult.addEventListener('click', (e) => {
            this.topline.textContent += '*';
        });

        //division
        this.btn_div = document.createElement('button');
        this.btn_div.textContent = '/';
        this.btn_div.setAttribute('id', 'btnDiv');
        this.btn_div.classList.add('button');
        this.inputContainer.appendChild(this.btn_div);
        this.btn_div.addEventListener('click', (e) => {
            this.topline.textContent += '/';
        });

        //compute
        this.btn_result = document.createElement('button');
        this.btn_result.textContent = '=';
        this.btn_result.setAttribute('id', 'btnResult');
        this.btn_result.classList.add('button');
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
        this.inputContainer.appendChild(this.btn_clear);
        this.btn_clear.addEventListener('click', (e) => {
            this.topline.textContent = '';
            this.bottomline.textContent = '';
            this.model.rawInput = '';
            this.model.result = 0;
        });


        this.app.append(this.displayContainer, this.inputContainer);
    }

}

const app = new Controller();