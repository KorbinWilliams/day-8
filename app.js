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

let rockChoice = document.querySelector("#rock");
let paperChoice = document.querySelector("#paper");
let scissorsChoice = document.querySelector("#scissors");

function play(name) {
  console.log(choices);
  let compChoice = Math.random() * 3 + 1;
  console.log(compChoice);
  // return Math.random() * (max - min) + min;
  if (name.toLowerCase() == choices[0].title) {
    rockChoice.textContent = "Your Choice";
  } else if (name.toLowerCase() == choices[1].title) {
    paperChoice.textContent = "Your Choice";
  } else {
    scissorsChoice.textContent = "Your Choice";
  }
}

console.log();
