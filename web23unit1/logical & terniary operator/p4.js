let a = 2;
let b = 3;
let c = 10;

if(a>b && a>c){
  console.log("a is greatest");
}
else if(b>c && b>a){
  console.log("b is greatest");
}
else if(c>a && c>b){
  console.log("c is greatest");
}
else{
  console.log("wrong input - try again");
}