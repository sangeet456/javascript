//built in functions
// let n = 10;
// for(let i=1 ; i<=n ; i++){
//     console.log(i);
// }
function OnetoN(n){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
}
OnetoN(10);
function eqn(a,b){
    return (Math.abs(a*a) + Math.abs(b*b));
}
console.log();
console.log(eqn(1,4));