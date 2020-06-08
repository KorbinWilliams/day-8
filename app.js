let choices = [
  {
    title: "rock",
    beats: "scissors",
    compchoice: 1,
    yourchoice: "Your Choice",
  },

  {
    title: "paper",
    beats: "rock",
    compchoice: 2,
    yourchoice: "Your Choice",
  },

  {
    title: "scissors",
    beats: "paper",
    compchoice: 3,
    yourchoice: "Your Choice",
  },
];

let rockChoice = document.querySelector("#pRock");
let paperChoice = document.querySelector("#pPaper");
let scissorsChoice = document.querySelector("#pScissors");

function getCompChoice() {
  let min = Math.ceil(0);
  let max = Math.floor(3);
  let computerChoice =
    choices[Math.floor(Math.random() * (max - min)) + min].title;
  let compChoice = `#c${computerChoice}`;
  console.log(compChoice);
  return compChoice;
}

function clearBoard() {
  document.querySelector("#crock").textContent = "";
  document.querySelector("#pRock").textContent = "";
  document.querySelector("#cpaper").textContent = "";
  document.querySelector("#pPaper").textContent = "";
  document.querySelector("#cscissors").textContent = "";
  document.querySelector("#pScissors").textContent = "";
}

function play(name) {
  clearBoard();
  let compChoice = document.querySelector(getCompChoice());
  console.log(compChoice + " this");
  compChoice.textContent = "Comp Choice";
  if (name.toLowerCase() == choices[0].title) {
    rockChoice.textContent = "Your Choice";
  } else if (name.toLowerCase() == choices[1].title) {
    paperChoice.textContent = "Your Choice";
  } else {
    scissorsChoice.textContent = "Your Choice";
  }
}

console.log();
