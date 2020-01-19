let credits = 23580;
const pricePerDroid = 3000;
let message;
let userInput = prompt("Сколько дроидов желаете приобрести?");
let totalPrice = pricePerDroid * userInput;

if (userInput === null) {
  message = "Отменено пользователем!";
} else if (totalPrice <= credits) {
  message = `Вы купили ${userInput} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
} else {
  message = "Недостаточно средств на счету!";
}

alert(message);