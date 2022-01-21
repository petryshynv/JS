let total = 0;
let input;
while (input !== null) {
  input = prompt("Enter number: ");
  let number = Number(input);
  if (Number.isNaN(number)) {
    alert(`Было введено не число, попробуйте еще раз`);
  } else {
    total = total + number;
  }
}
alert(`Общая сумма чисел равна ${total}`);

