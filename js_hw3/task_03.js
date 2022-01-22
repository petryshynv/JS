const findBestEmployee = function (employees) {
  let greaterNumberOfTask = 0;
  let index = 0;
  for (const el of Object.values(employees)) {
    if (el > greaterNumberOfTask) {
      greaterNumberOfTask = el;
      index = Object.values(employees).indexOf(greaterNumberOfTask);
    }
  }
  return Object.keys(employees)[index];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
