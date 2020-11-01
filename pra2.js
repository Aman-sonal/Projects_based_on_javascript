function generateCat()
{
    var image= document.createElement('img');
    var div = document.getElementById('flex-cat');
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFtcXAf2utD9I4IVJ8-7YxssCHnvC1SLtHTA&usqp=CAU";
    div.appendChild(image); 
}

function rpsGame(YourChoice){
    console.log(YourChoice);
    console.log(YourChoice.src)
}




