let str = "rahul is a boy";
let count = 0;
for(let i=0;i<str.length;i++){
  if(str[i]==" "){
    count++;
  }
}
if(count==0){
  console.log(count);
}
else{
  console.log(count+1)
}