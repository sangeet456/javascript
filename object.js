//objects is kind of like map/dictonary we have "key - value" pairs
//var details =["sangeet", 22,92,5,false];
//object mading
var x = {
    name : "sangeet",
    age : 24,
    exp : 5,
    ismarried : false,
};
console.log(x);


let car ={ name :"honda city",
    milage : 20,
    color : "black",
    isnew : true,
    "company name" : "honda"
}
console.log(car.milage);
console.log(car.isnew);
console.log(car["company name"]);

//print with help of forOf loop
for(let key in car){
    if(Object.hasOwnProperty.call(car, key)){
        console.log(key,car[key]);
    }
}