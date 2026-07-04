
// callback function is those type of function //
// which is passsed inside of another function//


function product (a,b,c){
    return a*b*c;
}
function fun(x,y){
console.log(x-y);
}
fun(product(3,8,9),7);