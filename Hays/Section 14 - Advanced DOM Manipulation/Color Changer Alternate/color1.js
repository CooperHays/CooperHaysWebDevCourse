var button = document.querySelector("button");
var isBlue = "false";
button.addEventListener("click", function(){
  if(isBlue){
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
  isBlue = !isBlue;
  });
