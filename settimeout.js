//print 1 to 10 but delay of 1 sec after each
// // number gets printed
//---------------------------------------
//example first //
function h (){

    console.log("hello");
}

function m()
{
    console.log("mello");
}
setTimeout(h,2*1000);
setTimeout(m,4*1000);
//--------------------------------------//

//another example //
 for(let i=1;i<=12;i++){
        setTimeout(function(){
            console.log(i);
        },i*100);  
}
//===============================================//
