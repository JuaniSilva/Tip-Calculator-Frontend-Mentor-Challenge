const bill = document.getElementById("bill");
let billValue = 0;

const numOfPeople = document.getElementById("number-of-people");
let numOfPeopleValue = 1;

const customPorc = document.getElementById("custom");
let customPorcValue = 0;

const form = document.getElementById("form");
let percentages = document.querySelectorAll("input[name=tip]");

let tip = document.getElementById("tip");
let total = document.getElementById("total");

bill.addEventListener("input", setBillValue);

function setBillValue() {
  if (bill.value.includes(",")) {
    bill.value = bill.value.replace(",", ".");
  }
  billValue = Number(bill.value);
  calculateTipAndTotal();
}

numOfPeople.addEventListener("input", setNumOfPeopleValue);

function setNumOfPeopleValue() {
  numOfPeopleValue = Number(Math.round(numOfPeople.value));
  calculateTipAndTotal();
}

customPorc.addEventListener("input", setCustomProcValue);

function setCustomProcValue() {
  // if(radio.checked){
  //   radio
  // }
  percentages = Math.round(customPorc.value) /100;
  calculateTipAndTotal();
}

percentages.forEach((radio) =>
  radio.addEventListener("click", () => {
    percentages = Number(radio.value) / 100;
    calculateTipAndTotal();
  })
);

function calculateTipAndTotal() {
  if (typeof percentages !== "number") {
    let tipValue = ((billValue * 0) / numOfPeopleValue)
    tip.innerHTML = `$ ${tipValue.toFixed(2)}`;
    let totalValue = billValue/numOfPeopleValue
    total.innerHTML = `$ ${totalValue.toFixed(2)}`
  } else {
    let tipValue = ((billValue * percentages) / numOfPeopleValue)
    tip.innerHTML = `$ ${tipValue.toFixed(2)}`;
    let totalValue = (tipValue + billValue)/numOfPeopleValue
    total.innerHTML = `$ ${totalValue.toFixed(2)}`
  }
}
