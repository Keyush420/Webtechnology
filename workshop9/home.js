//console.log("Hello world");

/*let a=2;
console.log(typeof(a));
let b=5;
let sum =a+b;insilaztion
console.log(sum);*/
/*var a=2;
var b=5;
var multi=a*b;
console.log(multi);*/
/*let a;
let b;
const pi=3.14;
console.log(pi);*/
/*const PI=3.14;
let raidus=window.prompt("enter radius");//window lay input user lay ko
console.log(raidus);
let circumference=2*PI*raidus;
console.log("the circumference is:"+circumference);*/
/*const PI=3.14;
let radius=window.prompt("enter radius");
console.log(radius);
let area=PI*radius*radius;
console.log("the area is "+area);
alert(area)*/
/*function sleep(){
    var name=window.prompt("enter the name");
    console.log(name);
    var age=window.prompt("enter the age");
    console.log(age);
    if (age>=10){
        alert(name + "the dog is old")
    }
    else{
        alert(name + "the dog is perfect")
    }
    var breed=window.prompt("enter the breed of dog");
    console.log(breed)
    
}
sleep();
function bark(){
    console.log(age);
}
bark()*/
document.getElementById("myBTN").onclick=function(){//pre build object is document
 let radius=document.getElementById("Mynumber").value;
 console.log(radius);
 const PI=3.14;
 let circumference=2*PI*radius;
 //document.getElementById("label").innerHTML=circumference;
 document.getElementById("circumference").innerHTML="the circumference"+circumference;
}        


