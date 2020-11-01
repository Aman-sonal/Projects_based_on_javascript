var clk= document.querySelector("#cit");
var h2= document.querySelector("#result");
var h3= document.querySelector("#body");
var res =document.querySelector("#reset");
var pos=false;
clk.addEventListener('click',function(){  
    var n= prompt("Enter the year of your birth");
    var num=(2020 - n)*365;
    var text = "you have spent "+  num + " days from your birth";
    h2.textContent=text;
    pos = true;
});
res.addEventListener('click',function(){
    if(pos==true)
    {
        var str= prompt("Are you sure you want ot reset this data");
        if(str=="YES" || str=="yes")
        {
            h2.textContent=h3.textContent;
            pos=false;
        }
    }
});  
