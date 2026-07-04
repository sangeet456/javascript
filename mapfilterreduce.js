//arrays topic map filter reduce //
// map -> we have to make make array with previous array with specific changes we use
//map reducee//

function twice(x){
    return 2*x;
}

function square(x){
    return x*x;
}
let arr = [2,8,7,-6,-5];
console.log(arr);
let brr =arr.map(twice);
console.log(brr);
let crr =arr.map(square);
console.log(crr);
let mrr = arr.map(function(ele){
    return ele+1;
})
console.log(mrr);