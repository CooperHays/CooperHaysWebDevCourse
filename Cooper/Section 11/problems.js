function printReverse(arr){
  for(var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function isUniform(arr){
  for(var i = 0; i < arr.length - 1; i++) {
    if(arr[i] !== arr[i+1]) {
      return false;
    } else
      return true;
  }
}

function sumArray(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return count;
}

function max(arr) {
  var max = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
