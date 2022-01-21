let credits = 35500;
let pricePerDroid = 3000;
let countOfDroid = prompt("Сколько дроидов покупаете?");
if (countOfDroid == null) {
  countOfDroid = "Отменено пользователем!";
  console.log(countOfDroid);
} else {
  let totalPrice = Number(countOfDroid) * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    let restOfCredits = credits - totalPrice;
    alert(
      `Вы купили ${countOfDroid} дроидов, на счету осталось ${restOfCredits} кредитов.`
    );
  }
}
