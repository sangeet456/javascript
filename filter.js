let arr = [2,8,7,6,5,10];
console.log(arr);

let brr = arr.filter(function(ele){
if(ele %2==0) return true;
else return false;
});
console.log(brr);