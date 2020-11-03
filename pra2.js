function generateCat()
{
    var image= document.createElement('img');
    var div = document.getElementById('flex-cat');
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFtcXAf2utD9I4IVJ8-7YxssCHnvC1SLtHTA&usqp=CAU";
    div.appendChild(image); 
}

function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice =yourChoice.id;
    botChoice=numberToChoice(randomChoiceByBot());
    result =decideWinner(humanChoice, botChoice); // returns a array i.e. [0,1] means human lost and bot won
    message=finalMessage(result);
    rpsFrontEnd(yourChoice.id, botChoice, message); 
}
function randomChoiceByBot()
{
    return Math.floor(Math.random()*3)
}
function numberToChoice(number)
{
    return ['rock','paper','scissors'][number];
}
function decideWinner(humanChoice,botChoice)
{   
        var rpsDatabase={
            'rock': {'scissors':1, 'rock' : 0.5 , 'paper':0},
            'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
            'scissors': {'paper': 1, "scissors" : 0.5, "rock": 0}
        }
        var yourScore= rpsDatabase[humanChoice][botChoice];
        var computerChoice=rpsDatabase[botChoice][humanChoice];
        return [yourScore,computerChoice];
}
function finalMessage([yourScore,computerChoice])
{
    if(yourScore==0)
    {
        return {"message":"you Lost", 'color': 'red'};
    }
    else if(yourScore==0.5)
    {
        return {"message" : "Tied", "color":"yellow"};
    }
    else
    {
        return {"message" : "You Won ! !", "color":"green"};
    }
}
function rpsFrontEnd(humanChoice, botChoice, message)
{
var imagesDatabase ={
'rock' : document.querySelector("#rock").src,
"paper": document.querySelector("#paper").src,
'scissors': document.querySelector("#sci").src,
}

document.querySelector("#rock").remove();
document.querySelector("#paper").remove();
document.querySelector("#sci").remove();


var humanDiv =document.createElement("div");
var compDiv = document.createElement('div');
var msgDiv= document.createElement('div');

humanDiv.innerHTML="<img src='" + imagesDatabase[humanChoice]+ "'height=150 weight=150 style='box-shadow: 0 20px 50px #7303fc'>'";     
compDiv.innerHTML = "<img src='" + imagesDatabase[botChoice]+ "'height=150 weight=150 style='box-shadow: 0 20px 50px #7303fc'>'"; 
msgDiv.innerHTML ="<h1 style='color : " + message['color'] + "; font-size: 60px; padding: 30px;'>" + message['message'] + "</h1>";    

document.getElementById("flex-box-rps-div").appendChild(humanDiv);
document.getElementById("flex-box-rps-div").appendChild(msgDiv);
document.getElementById("flex-box-rps-div").appendChild(compDiv);

}
