var words = ["khaleesi", "tyrion", "cersei", "stark", "targaryen", "lannister", "hodor", "winterfell", "tyrell", "daenerys"]
var correct = 0;
var wrong = 0;
var wrongList = []
var correctList = []
var numberGuessRem = 13
var randomWord = words[Math.floor(Math.random() * words.length)];
var correctLetter = 0;
var wrongLetter = 0;
var win = 0;
var currentWord = ""
document.onkeyup = function (event) {
    currentWord = ""
    var userInput = event.key;
    var numLetters = []
    numLetters.push(randomWord);
    var actualNumberLetters = randomWord.length;
    var letters = randomWord.split("");
    var sub = letters.indexOf(userInput);
    var noDup = wrongList.indexOf(userInput)
    var noDupCorrect = correctList.indexOf(userInput)
    var noWin = ""
    var dashes = []
    var correctWord = []

    for (var i = 0; i < randomWord.length; i++) {
        dashes[i] = "_";
    }


    var remainingLetters = letters.length;


    if (numberGuessRem === 0) {
        numberGuessRem = 13
        randomWord = words[Math.floor(Math.random() * words.length)];
    }


    if (sub === -1 && numberGuessRem !== 0 && noDup === -1) {
        numberGuessRem--
        wrongList.push(userInput)
    }


    for (var i = 0; i < letters.length; i++) {
        if (userInput === letters[i] && noDupCorrect === -1) {
            dashes[i] = userInput
            correct++
            correctList.push(userInput)

        }
    }


    if (numberGuessRem === 0) {
        wrongList = []
        correctList = []
        noWin = "Sorry you lost!"
        currentWord = randomWord
    }


    var sortCorrect = correctList.sort()
    var sortLetters = letters.sort()


    function winner(arr1, arr2) {
        if (arr1.length !== arr2.length)
            return false;
        for (var i = arr1.length; i--;) {
            if (arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }


    if (winner(sortCorrect, sortLetters) === true) {
        wrongList = []
        correctList = []
        win++
        currentWord = randomWord
        numberGuessRem = 13
        randomWord = words[Math.floor(Math.random() * words.length)];
    }




    console.log("sortCorrect " + sortCorrect)
    console.log("sortLetters " + sortLetters)


    var html =
        "<p>" + win + " " + noWin + " " + currentWord + "</p>"

    document.getElementById("wins").innerHTML = html;


    var html =
        "<p>" + dashes.join(" ") + "</p>"

    document.getElementById("current_word").innerHTML = html;

    var html =
        "<p>" + correctList.join(" ") + "</p>"

    document.getElementById("correct_guess").innerHTML = html;

    var html =
        "<p>" + numberGuessRem + "</p>"

    document.getElementById("rem_guess").innerHTML = html;

    var html =
        "<p>" + wrongList.join(" ") + "</p>"

    document.getElementById("al_guess").innerHTML = html;

}


