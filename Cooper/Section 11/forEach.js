var nums = [45,65,77,34];

nums.forEach(function(num){
  console.log(num);
});

function myForEach(arr, func) {
  for(var i = 0; i < arr.length; i++){
    func(arr[i]);
  }
}
