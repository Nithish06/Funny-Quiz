var readline=require('readline-sync');
var score=0
var user=readline.question("Welcome to Football Quiz Please Enter your name: ");



console.log("Welcome ",user + " Let's start with the quiz: ");

var question=[
    {
    ques: "Who's the top scorer of Uefa Champions League : ",
    ans: "cristiano ronaldo"
  },
    {
    ques: "Who is the all time scorer of England premier league? ",
    ans: "alan shearer"
  },
  {
    ques:"Who has won the Champions League the most times? ",
    ans: "real radrid"
  },

  {
    ques: "who won the premier league most times? ",
    ans: "manchester united	"
    
  },
   {
    ques: "who won the Laliga most times? ",
    ans: "real madrid"
    
  },
   {
    ques: "How many times did Real Madrid win the laliga? ",
    ans: "34"
    
  },

];

function checkAnswers(data,res){
  if(data.ans==res.toLowerCase()){
    score++;
    console.log("Correct Answer,Your Score = "+ score);
  }else{
    score--;
    console.log("Wrong Answer Your Score = "+ score);
  }
}

for(var i=0;i<question.length;i++){
  var res=readline.question(question[i].ques);
  checkAnswers(question[i],res);
}

console.log("Your Final Score is " + score);