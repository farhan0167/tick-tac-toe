function randomNumber(){
  return Math.floor(Math.random()*3 + 1);
}

// state = [row1cell1, row2cell2,....]
var state = [];


function saveState(idState){
  state.push(idState);
}

function mark(id_grabber){
  var id_player = id_grabber;


  document.getElementById(id_player).innerHTML = "X";
  saveState(id_player);
  if(state.length == 0){
    var id_computer = "row"+randomNumber()+"cell"+randomNumber();
    document.getElementById(id_computer).innerHTML = "O";
    saveState(id_computer);
  }
  else{
    for (var i = 0; i < state.length; i++) {
      var id_computer = "row"+randomNumber()+"cell"+randomNumber();
      if(state[i] != id_computer){
        document.getElementById(id_computer).innerHTML = "O";
        saveState(id_computer);
        break;
      }
    }
  }
  console.log(state);
}
