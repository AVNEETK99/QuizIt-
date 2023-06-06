let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;
let username=readlineSync.question("What's your name?");
console.log(kuler(`\nHello ${username} welcome to QuizIt`,"#831843"));
console.log(kuler("\nPlease select any option by typing either a/b/c/d\n","#4d7c0f") )

const database = {

  data: [
    {
      question: `Which flies a green, white, and orange (in that order) tricolor flag? `,
      options: {
        a: "Ireland",
        b: "Ivory Coast",
        c: "Italy"
      },
      correctAnswer: "c"
    },
    {
      question: `If you were looking at Iguazu Falls, on what continent would you be?`,
      options: {
        a: "Asia",
        b: "Africa",
        c: "South America"
      },
      correctAnswer: "c"
    },
    {
      question: `Which of the following languages has the longest alphabet?`,
      options: {
        a: "Greek",
        b: "Russian",
        c: "Arabic"
      },
      correctAnswer: "b"
    },
     {
      question: `The fear of insects is known as what?`,
      options: {
        a: "Entomophobia",
        b: "Arachnophobia",
        c: "Ailurophobia"
      },
      correctAnswer: "a"
    },
  {
      question: `Which horoscope sign is a fish?`,
      options: {
        a: "Aquarius",
        b: "Cancer",
        c: "Pisces"
      },
      correctAnswer: "c"
    },
    {
      question: `What is the largest US state (by landmass)?`,
      options: {
        a: "Texas",
        b: "Alaska",
        c: "California"
      },
      correctAnswer: "b"
    },
     {
      question: `Which app has the most total users?`,
      options: {
        a: "TikTok",
        b: "Snapchat",
        c: "Instagram"
      },
      correctAnswer: "c"
    },
     {
      question: `What city hosted the 2002 Olympic Games?`,
      options: {
        a: "Tokyo",
        b: "Beijing",
        c: "Sydney"
      },
      correctAnswer: "c"
    },
    {
      question: `Which of the following was considered one of the Seven Ancient Wonders?`,
      options: {
        a: "Colosseum",
        b: "Great Wall of China",
        c: "Colossus of Rhodes"
      },
      correctAnswer: "c"
    },
     {
      question: `What Italian city is famous for its system of canals?`,
      options: {
        a: "Rome",
        b: "Naples",
        c: "Venice"
      },
      correctAnswer: "c"
    },
  ]
}

const leaderBoard = {
  data:[
    {
      name:"Sakshi",
      score:9
    },
    {
      name:"Sadaf",
      score:9
    },
    {
      name:"Ruby",
      score:5
    }
  ]
}




function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("correct answer","#047857"));
    score++
  }
  else {
    console.log(kuler("incorrect answer","#7f1d1d"));
    console.log(kuler(`correct answer is ${correctAnswer}`,"#1e3a8a"));
  }
}

function showQuestionAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    /*console.log(database.data[i].question);*/
    console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync.question("Enter your answer - (a/b/c/d) - ").toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

function highScorer(leaderBoard){
  leaderBoard.data.push({name:username,score:score})
  let sortedScoreList=leaderBoard.data.sort((a,b) => b.score - a.score);
  console.log(kuler("\nCheck your position on the leader board ","#facc15"));
for (let leader of sortedScoreList){
  console.log(kuler(`${leader.name} - Score : ${leader.score}`,"#ef4444"));
}
  if (sortedScoreList[0].name === username && sortedScoreList[0].score === score) {
    console.log(kuler("\nCongratulations! You are the new high scorer!", "#3b0764"));
  }
}



showQuestionAndOptions(database);
console.log(kuler(`\nYour score is - ${score}`,"#f97316"));
highScorer(leaderBoard);
