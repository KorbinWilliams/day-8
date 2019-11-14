let choice = [
  {
    name: 'rock',
    beats: 'scissors',
    compchoice: 1,
    yourchoice: 'Your Choice'
  },

  {
    name: 'paper',
    beats: 'rock',
    compchoice: 2,
    yourchoice: 'Your Choice'
  },

  {
    name: 'scissors',
    beats: 'paper',
    compchoice: 3,
    yourchoice: 'Your Choice'
  }
]

debugger;
function play(name) {
  let playerchoice = choice.find(c => c.title.toLowerCase() == name.toLowerCase())
  document.querySelector("#rock").innerHTML = `
  <h1 id="rock" class="check2"> ${playerchoice.yourchoice}</h1>
  `;
}


