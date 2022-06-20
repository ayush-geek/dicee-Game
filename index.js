var randomNumber1=Math.floor(Math.random()*6)+1;


var img_num="images/"+"dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",img_num);


var randomNumber2=Math.floor(Math.random()*6)+1;


var img_num2="images/"+"dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",img_num2);



if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML="Player1 Wins!🚩"
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML="🚩Player2 Wins!"
else
document.querySelector("h1").innerHTML="Draw!"
