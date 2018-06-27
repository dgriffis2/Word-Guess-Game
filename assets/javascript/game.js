var words = ["khaleesi","tyrion","cersei", "stark", "targaryen", "lannister", "hodor", "winterfell", "tyrell", "daenerys"]

    var correct = 0;
    var wrong = 0;
    var numberGuessRem = 10
    if (numberGuessRem === 10){
        var randomWord = words[Math.floor(Math.random()*words.length)];}
document.onkeyup = function (event) {
    var userInput = event.key;
    var numLetters =[]
    numLetters.push(randomWord);
    var actualNumberLetters = randomWord.length;
    var letters = randomWord.split("");
    var sub = letters.indexOf(userInput);
    console.log("sub " + sub);
console.log("word " + randomWord);
console.log("Number of letters " + actualNumberLetters);
console.log("user input " + userInput);



if(sub === -1 && numberGuessRem !== 0){
    numberGuessRem--

}
    //if
    //(userInput !== letters[i])
    
    for (var i = 0; i < letters.length; i++) {
        if (userInput === letters[i]) {
            correct++
        //}{
            //console.log(sub + " SUB")
        }
    }
        
        console.log("correct " + correct)
        console.log("wrong " + wrong)
        console.log("Number of Guesses Remaining " + numberGuessRem)
    //if (confirmSushi) {
      //  alert("You like " + sushiType + "!");
     // }    
// shows my 1,2,3 fav shows
      //for (var j = 0; j < favTVshows.length; j++) {

// aleat to show tv shows
        //alert(favTVshows[j]);
      //}
//var str = "How are you doing today?";
//var res = str.split("");



var html =
"<p>Who will win? " + words[0] + "</p>"

document.getElementById("current_word").innerHTML = html;


var html =
"<p>Who will win? " + words[1] + "</p>"

document.getElementById("rem_guess").innerHTML = html;

var html =
"<p>Who will win? " + words[9] + "</p>"

document.getElementById("al_guess").innerHTML = html;

}

    // This function is run whenever the user presses a key.
    //document.onkeyup = function (event) {

        // Determines which key was pressed.
        //var userGuess;
    // var userGuess = event.key;

//var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//var html =
//"<p>You chose: " + userGuess + "</p>" +
//"<p>The computer chose: " + computerGuess + "</p>" +
//"<p>wins: " + wins + "</p>" +
//"<p>losses: " + losses + "</p>" +
//"//<p>ties: " + ties + "</p>";

//Set the inner HTML contents of the #game div to our html string
//document.querySelector("#game").innerHTML = html;
