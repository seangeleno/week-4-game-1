//Ready function
$(document).ready(function(){

  //  A total variable that will link with crystal clicks
  var Total= 0; 
  
  // Some variables ---> linked to my scoreboard
  var winCount= 0;
  $("#wins").text(winCount);
  var lossCount = 0;
  $("#losses").text(lossCount);

  //Find a number for the computer and ---> link to my numberboard. 
  var rand=Math.floor(Math.random()*101+19)
  $("#ComputerNumber").text(rand);

  //Find some numbers for the crystals. 
  var number1= Math.floor(Math.random()*11+1)
  var number2= Math.floor(Math.random()*11+1)
  var number3= Math.floor(Math.random()*11+1)
  var number4= Math.floor(Math.random()*11+1)

//Make red crystal pic a clickable function
  $("#Red").on ("click", function(){

    //Have Total value update with click. Gotta grab random number from variable number 1.
    Total = Total + number1;

    //Have Total value appear in another div
    $("#endScore").text(Total); 

        //Conditionals for winning and losing. Have to make functions for both instances and link to a reset function. 
        if (Total == rand){
          win();
        }
        // Using "else if" instead of "else". Don't know if "else" will confuse function.
        else if (Total > rand){
          lose();
        }   
  })  


  // Repeat Steps starting on lines 24-39 for 3 other crystals. Remember to grab variable numbers 2-4 instead of 1.
  $("#Blue").on ("click", function(){
    Total = Total + number2;
    $("#endScore").text(Total); 
        if (Total == rand){
          win();
        }
        else if (Total > rand){
          lose();
        } 
  })  
  $("#Gold").on ("click", function(){
    Total = Total + number3;
    $("#endScore").text(Total);
          if (Total == rand){
          win();
        }
        else if (Total > rand){
          lose();
        } 
  })  
  $("#Green").on ("click", function(){
    Total = Total + number4;
    $("#endScore").text(Total); 
      
          if (Total == rand){
          win();
        }
        else if (Total > rand){
          lose();
        }
  }); 
// A reset function to use whether I win or lose the game. Gotta reset the computer's number, the crystal numbers, the total number. But leave everything else
function reset(){
      rand=Math.floor(Math.random()*101+19);
      $("#ComputerNumber").text(rand);
      number1= Math.floor(Math.random()*11+1);
      number2= Math.floor(Math.random()*11+1);
      number3= Math.floor(Math.random()*11+1);
      number4= Math.floor(Math.random()*11+1);
      Total= 0;
      $("#endScore").text(Total);
      } 
// A win function. Alert, update win score variable, transfer score to html, and use reset function.
function win(){
alert("Winner Winner Chicken Dinner!");
  winCount++; 
  $("#wins").text(winCount);
  reset();
}
//A loss function. Alert, update win score variable, transfer score to html, and use reset function.
function lose(){
alert ("Your dad was right, you are a loser and that's all you'll ever be!");
  lossCount++;
  $("#losses").text(lossCount);
  reset()
}    
}); 