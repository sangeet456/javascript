var main = document.getElementById("main");
let arr =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7gjg15AO67WubpsRDFJMNEjRMW1D-HrALxsq3YTnHw&s=10",
"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnaEgS3rapMpJ8ZM9gQz1Pt7lFke1DBXX4G9X98BLMQ&s=10",
"https://media.cnn.com/api/v1/images/stellar/prod/210226041654-05-pokemon-anniversary-design.jpg?q=w_1920,h_1080,x_0,y_0,c_fill"];
let s="";
for(let i=1;i<=50;i++){
let r = Math.floor(Math.random()*3);
s+= `<div class ="card"><img src =${arr[r]}>

</div>`
}
main.innerHTML=s;