
"use strict"




// container.className ="list group item mt-2 ";


// let input =document.querySelector("input");


// let button =document.querySelector("button");




// button.addEventListener("click",function(){
//     for(let i=1;i<=input.value;i++){
//          console.log(input);
//     }
// })




// function myFunction() {
//     document.getElementById("input").innerHTML = "button";
//   }

// input.addEventListener("click",function(){
//     for(let i=1;i<=button.value;i++){
//         console.log(input);
//    }
// })









class CustomMatch {

    constructor(x){
        this.x=x
    }
    plus(a) {
        this.x=this.x+a;
        return this;
    }
    minus(b) {
        this.x=this.x-b;
        return this;
    }
    divided(c) {
        this.x=this.x/c;
        return this;
    }
    multiply(d) {
        this.x=this.x*d;
        return this;
    }
   
    

}
var result =new CustomMatch(100).plus(6).minus(30).multiply(3).divided(2)

console.log(result);


 





