function isEven(x) {
  if(x % 2 === 0) {
    return("True");
  }  else {
    return("False");
  }
};

function factorial(x) {
  var result = 1;
  for(var i=2; i <= x; i++) {
    result *= i;
  }
  return result;
}

//This works because we first define a separate variable that allows us to use it with the user input

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
