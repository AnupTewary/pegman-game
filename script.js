
// starting me humlog jo 43 and 24 ha usko 0 kare ge uske iye humlog ko select kar na hai
const score0 = document.querySelector('#score--0');

const score1 = document.querySelector('#score--1');

const current0 = document.querySelector('#current--0');

const currrent1 = document.querySelector('#current--1');

const player0 = document.querySelector('.player--0');

const player1 = document.querySelector('.player--1');

const diceel = document.querySelector('.dice');

const btnnew = document.querySelector('.btn--new')
const btnroll = document.querySelector('.btn--roll')
const btnhold = document.querySelector('.btn--hold')

let scores,currentScore, activeplayer, playing;



const clearresopnse = function(){
    // humlog ya array islye baneya ha kuki jaise he current player hold button ko click kar ga to humlog uska current data ko total score me store kar denge
     scores = [0,0];
    
     currentScore = 0;
    
    // we are starting with the player 1 in our example it is 0 player and second player is 1
     activeplayer = 0;

     playing = true;
    
    // we want to make the digit to 0 
    // starting condition
    score0.textContent = 0;
    score1.textContent = 0;
    
    current0.textContent = 0;
    currrent1.textContent = 0;
    
    diceel.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');

    player0.classList.add('player--active');
    player1.classList.remove('player--active');

};

// calling the function at the time of js to reload
clearresopnse();

// function for switch player
const switchplayer = function(){

    // jaise he humlog ya else a ta ha to iska mtlub ha ke humlog ka dice 1 aaye ha iska mtlub ha ke humlog ka current player ka value 0 kar na ho ga kuki ya he rule tha game ka
    document.getElementById(`current--${activeplayer}`).textContent = 0;

    // here we want to switch to next user
    if(activeplayer === 0){
        activeplayer = 1;
    }
    else{
        activeplayer = 0;
    }
    // jaise he humlog player switch kar ge to humlog currentscore ko change kar denge kuki current player ka score mera next player ka under nhi jana chaiye
    currentScore = 0;

    // toggle basically do that if player0 have a class player--active then it will reomve that class from it and if the player0 do not have the  class player--active then it will add that class there ya humlog ka rahe for wo color change ho jata ha jub player switch ho ta ha tub
    player0.classList.toggle('player--active');

    player1.classList.toggle('player--active');
}

// here we want do roll the dice
btnroll.addEventListener('click', function(){

    // we can play untill playing is true if playing is false then we cannot play
    if(playing === true){
    // 1.generating the random dice roll
    const dice =Math.trunc(Math.random()*6)+1;

    // 2. Display the dice
    // to display the dice we have to remove the hidden class from it
    diceel.classList.remove('hidden');
    // now my random dice will come there
    diceel.src = `dice-${dice}.png`;

    // 3. check for rolled 1: if true, switch to next player
    if(dice !== 1){
        // Add dice number in current score
        currentScore = currentScore + dice;

         document.getElementById(`current--${activeplayer}`).textContent = currentScore;
        
    }
    else{

        switchplayer();
    }
}
});

// Now lets work on hold button
btnhold.addEventListener('click', function(){
      
    
    if(playing == true){
    // 1st update the total score of current player with its current scrore
    scores[activeplayer] = scores[activeplayer] + currentScore;


    // score[1] = score[1] + currentScore;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

    // 2nd check tha total score if its more then 100 the current player will win

    if(scores[activeplayer] >=20){
        // finish the game
        playing = false;

        // when any player win the dice will remove
        diceel.classList.add('hidden');

        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');

        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    }


    //3 switch to next player
    // but humlog ya code ko function me dal denge 
    switchplayer();
}
});

btnnew.addEventListener('click', clearresopnse);