const score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,ties:0,losses:0
  }; 
  const y=document.querySelector('.js-score')
      y.innerHTML= `Wins:${score.wins},Loss: ${score.losses}.Ties :${score.ties}.`
   
  const choices = ["Rock", "Paper", "Scissors"];
   function reset()
   {
      score.ties=0;
      score.wins=0;
      score.losses=0;
      localStorage.removeItem('score');
  //    const z = document.querySelector(".js-result");
  //     z.style.display="none";
  //      const x=document.querySelector('.js-choice')
  //      x.style.display="none";
      const y=document.querySelector('.js-score')
      y.innerHTML= `Wins:${score.wins},Loss: ${score.losses}.Ties :${score.ties}.`
   }
  function rand(userChoice) 
  {
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      const result = getResult(userChoice, computerChoice);
       if(result=="Tied")
       {
          score.ties++;
       }
       else if(result=="Won")
       {
          score.wins++;
       }
       else
       {
           score.losses++;
       } 
       localStorage.setItem('score',JSON.stringify(score));
       const z=document.querySelector('.js-result')
       z.innerHTML=`You ${result} the game!.`
       const x=document.querySelector('.js-choice')
      x.innerHTML=` You
      <img src="/pics/${choices[userChoice - 1]}-emoji.png" alt="" class="c">
      <img src="/pics/${computerChoice}-emoji.png" alt="" class="c">
      Computer `
      const y=document.querySelector('.js-score')
      y.innerHTML= `Wins:${score.wins},Loss: ${score.losses}.Ties :${score.ties}.`

  }
  function getResult(userChoice, computerChoice)
   {
const outcomes = {
  "Rock": { "Rock": "Tied", "Paper": "Lost", "Scissors": "Won" },

  "Paper": { "Rock": "Won", "Paper": "Tied", "Scissors": "Lost" },

  "Scissors": { "Rock": "Lost", "Paper": "Won", "Scissors": "Tied" }
};
return outcomes[choices[userChoice - 1]][computerChoice];
   }
 