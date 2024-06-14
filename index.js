/* UTILITIES */
const uName = document.querySelector("first-name");
const uLName = document.querySelector("last-name");
const userBox = document.querySelector("user-box");
const form = document.querySelector("form");
console.log(uName);

/* CLASS */

class Users {
  constructor(d1, d2) {
    this.firstName = d1;
    this.lastName = d2;
  }
}

const createUser = () => {};
/* ARRAY */

let usersList = [];

/*  */

form.onsubmit = function (e) {
  e.preventDefault();
  /* crea oggetti */
  let mkUser = new Users(uName.value, uLName.value);
  /* inserisce il l'user creato nell'array */
  usersList.push(mkUser);
  /* salva in local store */
  /* localStorage.setItem("users-list", JSON.stringify(usersList)); */
};
console.log(usersList);
