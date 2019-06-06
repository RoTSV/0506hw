
let div=document.querySelector('.div_1');
let point=document.querySelector('.point');
div.addEventListener('mousemove', function(event) {
    point.style.left=event.pageX -250+'px';      
    point.style.top=event.pageY -15+'px'; 
    point.style.marginLeft="5px";
    
    
});
let div3=document.querySelector('.div_3');
let point2=document.querySelector('.point2');
 div3.addEventListener('mousemove', function(k) {
    point2.style.right=k.pageX -240+'px';      
    point2.style.bottom=k.pageY -420+'px'; 
     
}); 

