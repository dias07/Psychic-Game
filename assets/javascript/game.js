var word = ["back", "orange", "mouse", "mango"];
 var randNum= Math.floor(Math.random() * word.length);
 var choosenWord = word[randNum];
 var underScore = [];
 var rightWord = [];
 var wrongWord = [];
 console.log(choosenWord);
//  fruits[i] = fruits[i].toLowerCase();
var userText = document.getElementById("user-text");
var demo = document.getElementById("demo");
var ziza = document.getElementById("ziza");
var wins = 0;
var losses = 0;
var wrongguesses = 0;


let generateUnderScore =() => {
for (i=0; i<choosenWord.length; i++){
  underScore.push("_")

  }
  return underScore;
}
console.log(generateUnderScore());
document.onkeyup = function(event) {
  var keyword = event.key;
  userText.textContent = keyword;

    if (choosenWord.indexOf(keyword)> -1){
      rightWord.push(keyword);
    
      underScore[choosenWord.indexOf(keyword)] = keyword;
      demo.innerHTML=underScore.join(' ');
      if (underScore.join('')==choosenWord){
          alert('You win');
          wins++;
          underScore.push("_");
          underScore = [];
         
      }
    }
    else {
      wrongWord.push(keyword);
      ziza.innerHTML=wrongWord;
      wrongguesses++
      if (wrongguesses==5){
      alert('You lost');
     losses++;
     wrongWord=[];
     wrongguesses=0;
    }

      // console.log(wrongWord);
    }
  
    document.getElementById("wins").innerHTML=wins;
    document.getElementById("losses").innerHTML=losses;
}