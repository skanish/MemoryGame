/**
 * Created by itc_user on 6/30/2016.
 */
var cards = document.getElementsByClassName("card");
for (var i=0; i<cards.length; i++){
    var card = cards[i];
    card.addEventListener("click", cardClicked);
}

function thisIsTheFirstCard(){
    var first = document.getElementById("first-clicked");
    return (first === null);
}

function cardsAreEqual(firstCard, secondCard){
    var firstImage = firstCard.getElementsByTagName('img')[0];
    var secondImage = secondCard.getElementsByTagName('img')[0];

    return(firstImage.src == secondImage.src);
}

function userWon(){
    return document.getElementsByClassName("hide").length == 0;
}

function showUserWon(){
    var popWin = document.getElementById("win");
    popWin.className = "";
}

function waitAndHideCards(firstCard, secondCard){
    setTimeout(function(){
        var firstImage = firstCard.getElementsByTagName('img')[0];
        var secondImage = secondCard.getElementsByTagName('img')[0];
        firstImage.style.display = "none";
        secondImage.style.display = "none";
    },1000);
}

//Game On

//This func will keep track of the clicks and cards
// which essentially determines the entire game by using all the above functions
function cardClicked(e) {
    var card = e.target;
    var pic = card.getElementsByTagName('img')[0];
    pic.style.display = "block";
    if (thisIsTheFirstCard()){
        card.id = "first-clicked";
    }else{
        var firstCard = document.getElementById("first-clicked");
        firstCard.id = "";

        if ( cardsAreEqual(firstCard, card)){
            var firstImage = firstCard.getElementsByTagName('img')[0];
            var secondImage = card.getElementsByTagName('img')[0];
            firstImage.className = "";
            secondImage.className = "";
            if (userWon()){
                showUserWon();
            }
        }else{
            waitAndHideCards(firstCard, card);
        }
    }

}


