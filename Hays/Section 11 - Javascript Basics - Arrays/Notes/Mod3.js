var numbers = [1];
for(i=2;i<=50;i++){
  numbers.push(i);
}

for(i=0;i<=numbers.length;i++) {
  if(i % 3 === 0) {
    console.log(i);
  }
}
