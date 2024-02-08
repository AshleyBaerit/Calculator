const out = document.querySelector('.screen p');
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const digit = ['/', 'X', '+', '-']

let first = '';
let second = '';
let sign = '';
let ansver = false;

function clearAll() {
    first = '';
    second ='';
    sign = '';
    ansver = false;
    out.textContent = 0;

}
document.querySelector('.ac').onclick = clearAll;


document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;
    out.textContent = '';
    const key = event.target.textContent;

    if (numbers.includes(key)) {
        if (second === '' && sign === '') {
            first = first + key;
            out.textContent = first;
        }
        else if (first !== '' && second !== '' && ansver) {
            second = key;
            ansver = false;
            out.textContent = second;



        }
        else {
            second = second + key
            out.textContent = second;
        }
        console.log(first, second, sign);
        return;
    }
    if (digit.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(first, second, sign);
        return;
    }
    if (key === '=') {
        if (second === '') second = first
        switch (sign) {
            case '+':
                first = (+first) + (+second);
                break;
            case '-':
                first = first - second;
                break;
            case 'X':
                first = first * second;
                break;
            case '/':
                first = first / second;
                break;
        }
        ansver = true
        out.textContent = first;
        console.log(first, second, sign);



    }


}