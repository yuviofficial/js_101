let i = 1;
let sum = 0;
let count = 0;

while(i<=100){
  if(i%2===0){
    sum+=i;
    count++;
  }
  i++;
}
Average = sum/count;
console.log("The Average is", Average);