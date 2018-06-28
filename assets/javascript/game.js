var words = ["khaleesi","tyrion","cersei", "stark", "targaryen", "lannister", "hodor", "winterfell", "tyrell", "daenerys"]
//"khaleesi","tyrion","cersei", "stark", "targaryen", "lannister", "hodor", "winterfell", "tyrell", "daenerys"
    var correct = 0;
    var wrong = 0;
    var wrongList = []
    var correctList = []
    var numberGuessRem = 13
    var randomWord = words[Math.floor(Math.random()*words.length)];
    var correctLetter = 0;
    var wrongLetter = 0;
    var win = 0;
    var currentWord = ""
document.onkeyup = function (event) {
    currentWord = ""
    var userInput = event.key;
    var numLetters =[]
    numLetters.push(randomWord);
    var actualNumberLetters = randomWord.length;
    var letters = randomWord.split("");
    var sub = letters.indexOf(userInput);
    var noDup = wrongList.indexOf(userInput)
    var noDupCorrect = correctList.indexOf(userInput)
    var noWin = ""

  //  console.log("sub " + sub);
//console.log("word " + randomWord);
//console.log("Number of letters " + actualNumberLetters);
//console.log("user input " + userInput);

if(numberGuessRem === 0){
    numberGuessRem = 13
    randomWord = words[Math.floor(Math.random()*words.length)];
    //console.log("New Word " + randomWord)
}

 
//<script>
//function myFunction() {
    //var str = document.getElementById("demo").innerHTML; 
    //var res = str.replace("Microsoft", "W3Schools");
    //document.getElementById("demo").innerHTML = res;
//}
//</script>


//var myEventList=[];
//document.getElementById('myID').onclick = function(event) {
   //myEventList.push(event)
//};





if(sub === -1 && numberGuessRem !== 0 && noDup === -1){
    numberGuessRem--
    wrongList.push(userInput)
}


// on key press generate word[0] loop through all the words
    //if
    //(userInput !== letters[i])


    
    for (var i = 0; i < letters.length; i++) {
        if (userInput === letters[i] && noDupCorrect === -1) {
            correct++
            correctList.push(userInput)
        }
    }



    if(numberGuessRem === 0){
        wrongList = []
        correctList = []
        noWin = "Sorry you lost!"
        currentWord = randomWord
    }


    //if(array1.sort().join(',')=== array2.sort().join(',')){
      //  alert('same members');
    //}
    //else alert('not a match');
        
    var sortCorrect = correctList.sort()
    var sortLetters = letters.sort()


    function winner (arr1, arr2) {
        if(arr1.length !== arr2.length)
            return false;
        for(var i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
                return false;
        }
    
        return true;
    }
    

    if(winner(sortCorrect,sortLetters) === true){
        wrongList = []
        correctList = []
        win++
        currentWord = randomWord
        numberGuessRem = 13
        randomWord = words[Math.floor(Math.random()*words.length)];
    }





    console.log("sortCorrect " + sortCorrect)
    console.log("sortLetters " + sortLetters)
    
    //if(correctList.sort() === letters.sort()){
        //win++
    //}




        //console.log("letters " + letters)
        //console.log("correct list" + correctList)
        //console.log("correct " + correct)
        //console.log("wrong " + wrong)
        //console.log("Number of Guesses Remaining " + numberGuessRem)
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
"<p>" + win + " " + noWin + " " + currentWord + "</p>"

document.getElementById("wins").innerHTML = html;


var html =
"<p>Number of Letters " + letters.length + "</p>"

document.getElementById("current_word").innerHTML = html;

var html =
"<p>" + correctList + "</p>"

document.getElementById("correct_guess").innerHTML = html;

var html =
"<p>" + numberGuessRem + "</p>"

document.getElementById("rem_guess").innerHTML = html;

var html =
"<p>"+ wrongList + "</p>"

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
