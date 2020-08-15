let country;
let delivery;

let userInput = prompt("В какую страну оформлять доставку?").toLowerCase();

switch (userInput) {
  case "китай":
    country = "Китай";
    delivery = 100;
    break;

  case "чили":
    country = "Чили";
    delivery = 250;
    break;

  case "австралия":
    country = "Австралия";
    delivery = 170;
    break;

  case "индия":
    country = "Индия";
    delivery = 80;
    break;

  case "ямайка":
    country = "Ямайка";
    delivery = 120;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

if (delivery > 0) {
  alert(`Доставка в ${country} будет стоить ${delivery} кредитов`);
}
