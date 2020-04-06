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

var aboutClick = document.getElementById('goToAbout');
console.log(aboutClick);
aboutClick.addEventListener('click', function() {
aboutClick.style.color = ' #90ccf4';


})
/*activeImg.addEventListener('mouseout', function() {

    
    activeImg.style.background = 0;
    
    
    })*/
    
  

});
