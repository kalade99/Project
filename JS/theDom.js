document.addEventListener('DOMContentLoaded', function() {

var img1 = document.getElementById('img1');
var activeImg = document.getElementById('active');
console.log(activeImg)
console
activeImg.addEventListener('mouseover', function() {

activeImg.style.background = 'red';
activeImg.style.transition = 'background-color 0.5s ease'
img1.style.opacity = '1';
img1.style.transition = 'opacity 0.5s ease';
img1.style.height = '80%';
img1.style.transition = 'height 0.5s ease-in';



})



/*activeImg.addEventListener('mouseout', function() {

    
    activeImg.style.background = 0;
    
    
    })*/
    
    function changeColor(element, elements)
{
 
    for (var i = 0; i < elements.length; i++) {
       if (elements[i] == element)
       {
           elements[i].style.color = "blue";
       }
       else
       {
           elements[i].style.color = "black";
       }
   };
}

var navBtns = document.getElementById('goToAbout');
 
for (var i = 0; i < navBtns.length; i++)
{
    console.log(navBtns[i]);
    navBtns[i].addEventListener("click", changeColor.bind(null, navBtns[i], navBtns));
}
  

});
