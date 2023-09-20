const billAmount = document.getElementById("bill-amount");
const cashAmount = document.getElementById("cash-amount");

const checkBtn = document.getElementById("check");
const resetBtn = document.getElementById("reset");

const [errorBox] = document.getElementsByClassName("error");
const noOfNotes = document.getElementsByClassName("no-of-notes");

billAmount.value = 0;
cashAmount.value = 0;

const notes = [2000, 500, 100, 20, 10, 5, 1];
const denominationsToReturn = [0, 0, 0, 0, 0, 0, 0];

resetBtn.addEventListener("click", () => {
  errorBox.innerHTML = "";
  billAmount.value = 0;
  cashAmount.value = 0;
  for (let i = 0; i < 7; i++) {
    noOfNotes[i].innerHTML = 0;
  }
});

checkBtn.addEventListener("click", () => {
  let cash = parseInt(cashAmount.value);
  let bill = parseInt(billAmount.value);

  let amountToReturn = cash - bill;
  if (amountToReturn < 0) {
    errorBox.innerHTML = "Do you want to wash dishes?";
    cashAmount.value = 0;
    for (let i = 0; i < 7; i++) {
      noOfNotes[i].innerHTML = 0;
    }
    return;
  }

  if (amountToReturn === 0 && bill === 0 && cash === 0) {
    errorBox.innerHTML = "Ohh comeon don't make me feel obselete.";
    return;
  }

  for (let i = 0; i < 7; i++) {
    denominationsToReturn[i] = Math.floor(amountToReturn / notes[i]);
    amountToReturn =
      amountToReturn - notes[i] * Math.floor(amountToReturn / notes[i]);
  }

  errorBox.innerHTML = "Check out your return denominations 👇🏻.";

  for (let i = 0; i < 7; i++) {
    noOfNotes[i].innerHTML = denominationsToReturn[i];
  }
});
