let arr = [2,8,7,6,5];
console.log(arr);
arr = arr.sort();
console.log(arr);
arr= arr.sort(function(a,b){
    return b-a;
})
console.log(arr);
