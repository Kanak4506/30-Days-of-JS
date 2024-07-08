var box = document.querySelector('#center');

box.addEventListener("mousemove", function(info){
   const box_location = box.getBoundingClientRect();
    const leftDistance = info.clientX;
    var insideRect = leftDistance - box_location.left;
    // console.log(insideRect);


    if(insideRect < box_location.width / 2){
        // box.style.color :"red";
        console.log("hey");
    } else{
        console.log("hello");
    }
});