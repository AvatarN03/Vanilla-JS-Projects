const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
  );

let transactions =
  localStorage.getItem("transactions") !== null
    ? localStorageTransactions
    : [];

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please enter a text and amount");
  } else {
    const transaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text.value,
      amount: +amount.value,
    };

    transactions.push(transaction);
    addtransactionDOM(transaction);
    text.value = "";
    amount.value = "";
    updateValues();

    updateLocalStorage();
  }
}

function addtransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id})">Del</button>`;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((item) => item <= 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  balance.innerHTML = `${total}`;
  money_minus.innerHTML = `${expense}`;
  money_plus.innerHTML = `${income}`;
}


function updateLocalStorage(){
localStorage.setItem("transactions", JSON.stringify(transactions));
}


function removeTransaction(id){
    transactions = transactions.filter( transaction=> transaction.id !== id );

    updateLocalStorage();
    init();
}

function init(){
    list.innerHTML= '';
    transactions.forEach(addtransactionDOM);
    updateValues();
}


init();



form.addEventListener("submit", addTransaction);
