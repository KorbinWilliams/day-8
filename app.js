let choice = [
  {
    name: 'rock',
    beats: 'scissors',
    compchoice: 1
  },

  {
    name: 'paper',
    beats: 'rock',
    compchoice: 2
  },

  {
    name: 'scissors',
    beats: 'paper',
    compchoice: 3
  }
]

function play() {
  if (document.querySelector('#rock').classList.contains("check1"))
    return (document.querySelector('#rock').className = "check2")
};





