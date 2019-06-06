
let div=document.querySelector('.div_1');
let point=document.querySelector('.point');
let point2=document.querySelector('.point2');

div.addEventListener('mousemove', function(event) {
    point.style.left=event.pageX-15 +'px';      
    point.style.top=event.pageY-15 +'px'; 
    
    point2.style.right=event.pageX -15+'px';      
    point2.style.bottom=event.pageY-15+'px';
    
});


