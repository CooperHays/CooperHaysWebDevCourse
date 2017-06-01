function printReverse(str){
  for(var i = str.length-1; i >= 0; i--){
    console.log(str[i]);
  }
}

//Start of isUniform()
function isUniform(arr){
  var x = arr[0];
  var test = [];
  arr.forEach(function(y,i){
    if(x !== arr[i]){
      test.push("false");
    }
  });
  if(test.length === 0){
    console.log("true");
  } else {
    console.log("false");
  }
}


//This is a better form of isUniform. Using the for loop eliminates the need for pushing an answer out of the forEach like I had to do
function betterIsUniform(arr){
  var x = arr[0];
  for(i=1; i < arr.length; i++){
    if(x !== arr[i]){
      return false;
    }
  }
  return true;
}


//Start of sumArray()
function sumArray(arr){
  var x = arr[0];
  for (i = 1; i < arr.length; i++){
    x += arr[i];
  }
  return x;
}

//Start of max()
function max(arr){
  var max = arr[0];
  for(i = 1; i < arr.length; i++){
    if(max < arr[i]){
      var max = arr[i];
    }
  }
  return(max);
}
