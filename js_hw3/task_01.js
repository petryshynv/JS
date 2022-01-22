const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(Object.entries(user));

for (const elem of Object.keys(user)) {
  console.log(elem + ":" + user[elem]);
}
