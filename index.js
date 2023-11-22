ludogame =() => {
const play1= Math.floor(Math.random()*6)+1;
const play1dice="images/dice"+play1+".png";
document.getElementById('dice1').setAttribute('src',play1dice);

const play2= Math.floor(Math.random()*6)+1;
const play2dice="images/dice"+play2+".png";
document.getElementById('dice2').setAttribute('src',play2dice);

if(play1>play2)
{
  document.querySelector('h1').innerHTML="Player 1 WON";
}
else if(play1<play2)
{
  document.querySelector('h1').innerHTML="Player 2 WON";
}
else{
  document.querySelector('h1').innerHTML="DRAW";
}
}