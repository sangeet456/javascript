let x = document.getElementById("ele1");
x.addEventListener("click", function() {
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
});

let y = document.getElementById("ele2");
y.addEventListener("mousemove", function() {
    y.style.color = "white";
    y.style.backgroundColor = "orange";
});

// Fixed: This was using 'y' again - changed to 'y' for mouseleave (same element)
y.addEventListener("mouseleave", function() {
    y.style.color = "black";
    y.style.backgroundColor = "white";
});

let z = document.getElementById("ele3");
// Fixed: This was 'y.addEventListener' but should be 'z.addEventListener'
z.addEventListener("click", function() {
    z.style.color = "blue";
    z.style.backgroundColor = "purple";
});