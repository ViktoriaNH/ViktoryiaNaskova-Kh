let x = null;
let y = null;
let sign;

function getSign(_sign) {
  sign = _sign;
}

function getNumber(num) {
  if(x === null) {
    x = num
  } else {
    y = num
  }
}

function getResult() {
    switch(sign) {
        case '+': console.log(x + y); break;
        case '-': console.log(x - y); break;
        case '*': console.log(x * y); break;
        case '/': console.log(x / y); break;
    }
}


