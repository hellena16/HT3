'use strict'
 //Задача 1

let num1 = +prompt('Введите первое число диапазона');
let num2 = +prompt('Введите второе  число диапазона');
if ((num1 > num2 && num1 - num2 < 5) || (num2 > num1 && num2 - num1 < 5)) {
  num1 = +prompt(
    'Диапазон введен неверно. Диапазон должен быть более 5. Введите первое число диапазона',
  );
  num2 = +prompt(
    'Диапазон введен неверно. Диапазон должен быть более 5. Введите второе  число диапазона',
  );
}
if (num1 < num2) {
  for (let i = num1; i <= num2; i++) {
    console.log(i)
  }
} else {
  for (let i = num2; i >= num2; i--) {
    console.log(i)
  }
}

//Задача 2

const realpin = 1234;
const realpuk = 4321;
for (let i = 0; i <= 3; i++) {
  if (i < 3) {
    let pin = +prompt('Enter your pin')
    if (pin === realpin) {
      alert('OK')
      break
    } else {
      alert('Your pin is wrong.Try again')
    }
  } else {
    for (let a = 0; a <= 3; a++) {
      if (a < 3) {
        let puk = +prompt('Enter your puk')
        if (puk === realpuk) {
          alert('OK')
          break
        } else {
          alert('Your puk is wrong.Try again')
        }
      } else {
        alert('You are looser')
        break
      }
    }
  }
}

//Задача 3
let Number1 = +prompt('Enter  number1');
let Number2 = +prompt('Enter number2');
let moreLess;
let oddEven;
let positiveNegative;
function checkNumber(i) {
  if (i > 100) {
    moreLess = 'больше 100'
  } else {
    moreLess = 'меньше 100'
  }
  if (i % 2 !== 0) {
    oddEven = 'нечетное'
  } else {
    oddEven = 'четное'
  }
  if (i > 0) {
    positiveNegative = 'положительное'
  } else {
    positiveNegative = 'oтрицательное'
  }
  let result = `Числo  диапазона ${i}, ${moreLess}, ${oddEven}, ${positiveNegative}`

  return result
}
if ((isNaN(Number1), isNaN(Number2))) {
  alert('Вами введено не число');
} else {
  if (Number2 > Number1) {
    for (let i = Number1; i <= Number2; i++) {
      let result = checkNumber(i)
      console.log(result)
    }
  } else {
    for (let i = Number1; i >= Number2; i--) {
      let result = checkNumber(i);
      console.log(result);
    }
  }
}
 
//Задача 4
const a = +prompt('Введите начало диапазона');
const b = +prompt('Введите конец диапазона');
for (let i = a; i < a + 7; i++) {
  if (i > b) {
    break
  }
  console.log(i)
}
