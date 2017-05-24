var age = prompt("What is your age in years?");
if (age < 0){
  console.log("Error");
}
// Remember above that I can convert the prompt to a number by using Number()

else if(age === "21"){
  console.log("Happy 21st Birthday");
}

else {
  if (Number.isInteger(age ** 0.5)){
    console.log("Perfect square!");
  }

  else if (age % 2 === 1){
    console.log("Your age is odd");
  }

  console.log("Done");
}

//The solution only used if code.  I did nested else if code.  What is better?
