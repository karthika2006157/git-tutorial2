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