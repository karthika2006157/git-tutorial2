function hello(){
    console.log("hello Akil");
}
hello();
function add(a,b){
    console.log(a+b);
}
add(1,2);

function displayAnotherFunction(func){

    func(1,2);
}
displayAnotherFunction(add);
let varFunc=add;
varFunc(1,4);

let newFuncVar=function(){
    console.log("variable function");
};
newFuncVar();

let arrowFuncVar=() => {
    console.log("Arrow Functions");

};
arrowFuncVar();
let nums=[1,2,3,4,5];
let evens=nums.filter((n)=>{
    return(n%2===0);
})
console.log(evens);
let newEvens=nums.filter((n)=> n%2===0);
console.log(evens);

//map method
console.log("using map method");
let squares=nums.map((n)=>{
    return n*n;
})
console.log(squares);
//reduce method
console.log("using reduce method");
let newSum=nums.reduce((sum,n)=>{
    return sum+n;
},(sum=0));
console.log(newSum);
