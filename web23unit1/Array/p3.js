let sum = 0;
let count = 0;
let arr = [1,2,3,4,5,6];
for(let i=0;i<arr.length;i++){
  if(arr[i]%2===0){
    sum+=arr[i];
    count++
  }
}
let average = sum/count;
console.log(average);