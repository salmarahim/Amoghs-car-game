class Form{
constructor(){

}
display(){
var title=createElement("h1");
title.html("CAR RACING GAME");
title.position(400,200);

var input=createInput("enter your name");
input.position(400,300);

var button=createButton("PLAY");
button.position(400,380);

var greeting=createElement("h3");
button.mousePressed(function(){
  input.hide();
  button.hide();
  var name=input.value();
  playerCount++;
  player.updateCount(playerCount);
  player.update(name);
  greeting.html("Hello "+ name);
  greeting.position(400,260);
})

}





}

