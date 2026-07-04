arr =[1,2,3,4,5];
n = arr.length;
for(let i=0 ; i<n ; i++){
    console.log(arr[i]);
}

//push//operation
arr.push(6);
console.log(arr);

//pop//operation
arr.pop();
console.log(arr);

//shift//operation
arr.shift();//remove first element
console.log(arr);

//unshift//operation
arr.unshift(0);//add element at first position
console.log(arr);