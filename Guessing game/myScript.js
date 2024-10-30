let y = Math.floor(Math.random() * 10 + 1);

let guess = 1;

document.getElementById("submitguess").onclick = function () {

  let x = document.getElementById("guessField").value;

  let tries = 3 - guess;

  document.getElementById("attempts").innerHTML=tries;

  if (x == y) {
    if (confirm("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESSES. PRESS OK TO RESTART.")) {
        window.location.reload();
   }}
  
  else { 

    if (guess==3) {
        if (confirm("GAME OVER. YOU USED ALL OF YOUR ATTEMPTS. THE CORRECT NUMBER WAS - " + y + ". PRESS OK TO RESTART.")) {
           window.location.reload();
       }
     }
   

   else if (x > y) {
    guess++;
    alert("WRONG NUMBER! TRY A SMALLER ONE");
   }

   else {
    guess++;
    alert("WRONG NUMBER! TRY A BIGGER ONE")
   }

 }
}    
