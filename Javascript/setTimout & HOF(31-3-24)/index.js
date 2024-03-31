console.log("start");

setTimeout(() => {
  console.log("callBack");
}, 5000);

let currentTime = new Date().getTime();
let endTime = currentTime;
while(endTime < currentTime + 5000){
  endTime = new Date().getTime();
}

console.log("while expired");
console.log("end");
 

function fetchData(){
  console.log("fetching data");
};

function y(fetchData){
  fetchData(); 
 
}

y(fetchData);

let radius =[1,2,3,4,5,6,7,8,9,10];
const area = function(radius){
  return Math.PI * radius * radius;
};

const dia = function(radius){
  return 2 * radius;
};
///prototype of my own map function
const calculate = function(radius,logic){
  let outputAre = [];
  // let outputDia = [];
  for(let i=0; i<radius.length; i++){
    outputAre.push(logic(radius[i]));
    // outputDia.push(logic(radius[i]));
  }
  return outputAre;
}
console.log(calculate(radius,area));
console.log(calculate(radius,dia));