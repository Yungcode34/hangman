var randomWordArr = ["javascript","bacon","beer","programming","gaming"]
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

var s;
var count = 0;
var answerArray = [];

function startUp()
{
        for (var i = 0; i < randomWord.length; i++)
        {
            answerArray[i] = "_";
        }
        s = answerArray.join(" ");
        document.getElementById("answer").innerHTML = s;
}

function Letter()
{
    var letter = document.getElementById("letter").value;

    if (letter.length > 0)
    {   
     for (var i = 0; i < randomWord.length; i++)
     {
         if (randomWord[i] === letter)
     {
        answerArray[i] = letter;
     }
    }
    count++;
    document.getElementById("counter").innerHTML = "no of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}
if(count>12)
{
    document.getElementById("stat").innerHTML = "come on you should have gotten it by now!";
}
}
