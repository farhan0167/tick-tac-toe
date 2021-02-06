function startGame(){
  document.getElementById("game-board").style.visibility='visible';
  document.getElementById("play").style.visibility='hidden';
}
function resetGame(){
  location.reload();
}

function randomNumber(){
  return Math.floor(Math.random()*3 + 1);
}

var winningConditions = [
  ['row1cell1','row1cell2','row1cell3'],
  ['row2cell1','row2cell2','row2cell3'],
  ['row3cell1','row3cell2','row3cell3'],
  ['row1cell1','row2cell1','row3cell1'],
  ['row1cell2','row2cell2','row3cell2'],
  ['row1cell3','row2cell3','row3cell3'],
  ['row1cell1','row2cell2','row3cell3'],
  ['row1cell3','row2cell2','row3cell1']
]

var state = {
  X:[],
  Y:[]
};


function Winner(){
  if(
    winningConditions[0].every(val => state.X.includes(val)) ||
    winningConditions[1].every(val => state.X.includes(val)) ||
    winningConditions[2].every(val => state.X.includes(val)) ||
    winningConditions[3].every(val => state.X.includes(val)) ||
    winningConditions[4].every(val => state.X.includes(val)) ||
    winningConditions[5].every(val => state.X.includes(val)) ||
    winningConditions[6].every(val => state.X.includes(val)) ||
    winningConditions[7].every(val => state.X.includes(val))
  ){

    document.getElementById("header").innerHTML = ("Congrats! You won against me");
    console.log("A");

  }
  else if(
    winningConditions[0].every(val => state.Y.includes(val)) ||
    winningConditions[1].every(val => state.Y.includes(val)) ||
    winningConditions[2].every(val => state.Y.includes(val)) ||
    winningConditions[3].every(val => state.Y.includes(val)) ||
    winningConditions[4].every(val => state.Y.includes(val)) ||
    winningConditions[5].every(val => state.Y.includes(val)) ||
    winningConditions[6].every(val => state.Y.includes(val)) ||
    winningConditions[7].every(val => state.Y.includes(val))
  ){

    document.getElementById("header").innerHTML = ("Oh no! You lost against me. Better luck next time!");
    console.log("B");
  }
}


function Win(){
  if(winningConditions[0].every(val => state.X.includes(val)) || winningConditions[0].every(val => state.Y.includes(val))){
    return true;
  }
  else if(winningConditions[1].every(val => state.X.includes(val)) || winningConditions[1].every(val => state.Y.includes(val))){
    return true;
  }
  else if(winningConditions[2].every(val => state.X.includes(val)) || winningConditions[2].every(val => state.Y.includes(val))){
    return true;
  }
  else if(winningConditions[3].every(val => state.X.includes(val)) || winningConditions[3].every(val => state.Y.includes(val))){
    return true;
  }
  else if(winningConditions[4].every(val => state.X.includes(val)) || winningConditions[4].every(val => state.Y.includes(val))){
    return true;
  }
  else if(winningConditions[5].every(val => state.X.includes(val)) || winningConditions[5].every(val => state.Y.includes(val))){
    return true;
  }
  else if(winningConditions[6].every(val => state.X.includes(val)) || winningConditions[6].every(val => state.Y.includes(val))){
    return true;
  }
  else if(winningConditions[7].every(val => state.X.includes(val)) || winningConditions[7].every(val => state.Y.includes(val))){
    return true;
  }
  else{
    return false;
  }
}


function saveState(idState,player){
  if(player == "X"){
    state.X.push(idState);
  }
  if(player == "Y"){
    state.Y.push(idState);
  }
}

function mark(id_grabber){
  if(!Win()){
    var id_player = id_grabber;
    document.getElementById(id_player).innerHTML = "X";
    saveState(id_player,"X");
    if(state.X.length == 1){
      var id_computer = "row"+randomNumber()+"cell"+randomNumber();
      //if idcomp and idplayer matches, create a new idcomp as to prevent player move overrides
      while (id_computer ==id_player) {
        var id_computer = "row"+randomNumber()+"cell"+randomNumber();
      }
      document.getElementById(id_computer).innerHTML = "O";
      saveState(id_computer,"Y");
    }

    else if(state.X.length<=4 && state.X.length>1){
      var id_computer = "row"+randomNumber()+"cell"+randomNumber();
      while(state.X.includes(id_computer) || state.Y.includes(id_computer)) {
        id_computer = "row"+randomNumber()+"cell"+randomNumber();
      }

      document.getElementById(id_computer).innerHTML = "O";
      saveState(id_computer,"Y");

      /* Given that moves were made before, you wanna mark the players move and then have the comp make a move.
      While the comp makes a move, it cannot override the players move nor override previous moves.*/
    }
    console.log(state);
    Winner();
  }
  else{
    alert("Game is over. Click reset to start over.");
  }
}




/* References:
https://stackoverflow.com/questions/38811421/how-to-check-if-an-array-is-a-subset-of-another-array-in-javascript
*/
