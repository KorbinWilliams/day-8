let choice = {
  {
  title: 'rock',
    beats: 'scissors',
      compchoice: 1,
        yourchoice: 'Your Choice'
},

{
  title: 'paper',
    beats: 'rock',
      compchoice: 2,
        yourchoice: 'Your Choice'
},

{
  title: 'scissors',
    beats: 'paper',
      compchoice: 3,
        yourchoice: 'Your Choice'
}
}


debugger;
function play(name) {
  let playerchoice = choice.find(c => c.title.toLowerCase() == name.toLowerCase())
  if (name == 'rock') {
    document.querySelector("#rock").innerHTML = `
  <h1 class="check2"><span id="rock">${playerchoice.yourchoice}</span></h1>
  `}
  else if (name == 'paper') {
    document.querySelector("#paper").innerHTML = `
  <h1 class="check2"><span id="paper">${playerchoice.yourchoice}<span/></h1>
  `}
  else {
    document.querySelector("#scissors").innerHTML = `
  <h1 class="check2"><span id="scissors">${playerchoice.yourchoice}</span></h1>
  `}
}

play(name);



