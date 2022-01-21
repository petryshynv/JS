let message = prompt("Введите пароль: ");
const ADMIN_PASSWORD = "adminpass";
if (message == null) {
  message = "Отменено пользователем!";
} else if (message == ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else{
    message = "Доступ запрещен, неверный пароль!";
}
alert(message);
