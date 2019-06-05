
let div=document.querySelector('.div_1');
let point=document.querySelector('.point');
div.addEventListener('mousemove', function(event) {
    point.style.right=event.pageX +'px';      
    point.style.top=event.pageY +'px';   
});


