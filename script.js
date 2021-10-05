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
  if(numOfPeopleValue <= 0){
    numOfPeopleValue = 1
  }
  calculateTipAndTotal();
}

customPorc.addEventListener("input", setCustomProcValue);

function setCustomProcValue() {
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
    let tipValue = ((billValue * 0))
    tip.innerHTML = `$ ${(tipValue  / numOfPeopleValue).toFixed(2)}`;
    let totalValue = billValue
    total.innerHTML = `$ ${(totalValue /numOfPeopleValue).toFixed(2)}`
  } else {
    let tipValue = (billValue * percentages)
    tip.innerHTML = `$ ${(tipValue / numOfPeopleValue).toFixed(2)}`;
    let totalValue = (tipValue + billValue)
    total.innerHTML = `$ ${(totalValue  / numOfPeopleValue).toFixed(2)}`
  }
}
