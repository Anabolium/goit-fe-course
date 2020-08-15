// let a = 145;
// let b = 742;
// let c = 8;
// let c = "hello kitty";
// // console.log("a=", a,"b=", b);
// // console.log(a * b);
// console.log(c);
// console.log(typeof c);
// let pin = 1;
// pin = 3;
// console.log(pin);

// if (20 > 30) {
//     console.log('x > y');
// } else {
// console.log('x < y');
// }

// const salary = 20000;
// if (salary <= 500) {
//     console.log('level 1');
// } else if (salary > 500 && salary <= 1500) {
//     console.log('level 2');
// } else if (salary > 1500 && salary <= 3000) {
//     console.log('level 3');
// } else {
//     console.log('level 4');
// }

/*Тернарный оператор*/
// const balance = -1000;
// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(message);


// const stars = 4;
// let price;
/*
if (stars === 1) {
    price = 20;
} else if (stars === 2) {
    price = 30;
} else if (stars === 3) {
    price = 50;
} else if (stars === 4) {
    price = 70;
} else if (stars === 5) {
    price = 120;
} else {
    console.log('Такого количества звезд нет');
}
console.log(price);*/





/*

switch (stars) {
  case 1:
    price = 20;
    break;

  case 2:
    price = 30;
    break;
  case 3:
    price = 50;
    break;
  case 4:
    price = 70;
    break;
  case 5:
    price = 120;
    break;

    default:
        console.log('такого количества звезд нет');
}
console.log(price);
*/

/*
const stars = 8;
let price;

if (stars === 1 || stars === 1) {
    price = 20;
} else if (stars === 3 || stars === 4) {
    price = 30;
} else if (stars === 5) {
    price = 120;
} else {
    console.log('Такого количества звезд нет');
}
console.log(price);
*/



/*
const stars = 6;
let price;

switch (stars) {
    case 1:
    case 2:
      price = 20;
      break;

    case 3:
    case 4:
      price = 30;
      break;
   
    case 5:
      price = 120;
      break;
  
      default:
          console.log('такого количества звезд нет');
  }
  console.log(price);
  */



  // Цикл FOR

//   for (let i = 0; i <= 6; i += 1){
//       console.log(i);
//   }
//   console.log('happy tits');





/*
//FOR LOOP
// 1. сделать знаения
const minSalary = 500;
const maxSalary = 5000
const employees = 3;
let totalSalary = 0;
// 2. Перебрать работников в цикле 
for (let i = 1; i <= employees; i += 1) {
// 3. сгенерировать рандомную ЗП    
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary
        );
console.log(`ЗП работника номер ${i} - ${salary}`);

// 4. Прибавить к тоталу
        totalSalary += salary;

    // console.log(`ЗП Работника номер ${i} -`);
}

// 5. Лог
console.log(`totalSalary: `, totalSalary);
*/

/*
const min = 6;
const max = 13;
let total = 0;

//1. фор от мин до макс  с шагом в 1
for(let i = min; i <= max; i += 1) {
    
//2. проверяем остаток от деления
    if (i % 2 !== 0) {
        console.log('Не чётное ', i);
        continue;
    }
    
//3. пишем в сумму
        console.log('чётное ', i);
        total += i;
    }

console.log('Total: ', total);
*/


/*
****************************
let balance = 10000;
const payment = 20000;

console.log(
    `Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`,
);

if (payment <= balance) {
    balance -= payment;
    console.log(`Все хорошо, снимаем деньги... Спасибо за покупку!!`);
    console.log(`На счету осталось ${balance} кредитов`);
} else {
    console.log(`На счету недостаточно средств для проведения операции`);
}
console.log(`Операция завершена`);*/


/********    DISCOUNT   *********/
let totalSpent =90;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
    console.log(`Бронзовый партнер, скидка 2%`);
    discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log(`Серебрянный партнер, скидка 5%`);
    discount = 0.05;
} else if (totalSpent >= 5000) {
    console.log(`Золотой партнер, скидка 10%`);
    discount = 0.1;
} else {
    console.log(`Не партнер, скидка 0%`);
}

payment -= payment * discount;
console.log(
    `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,);
totalSpent += payment;
console.log(`Общая сумма потраченная в магазине: ${totalSpent}`);