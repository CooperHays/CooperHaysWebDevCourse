function palindrome(str){
  var x = str;
  var last = str[str.length-1];
  for(i=str.length-2; i>=0; i--){
    var newStr = last += str[i];
  }
  if(x !== newStr){
    return false;
  }
  return true;
}
