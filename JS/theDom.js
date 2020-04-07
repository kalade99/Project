

    function changeColor(element, elements)
    {
     
        for (var i = 0; i < elements.length; i++) {
           if (elements[i] == element)
           {
               elements[i].style.color = "#90ccf4";
           }
           else
           {
               elements[i].style.color = "black";
           }
       };
    }


document.addEventListener('DOMContentLoaded', function() {


//getting the elemtents from html

/*var img1 = document.getElementById('img1');*/
var img1 = document.getElementsByTagName('img');
var activeImg = document.getElementById('active');
var activeImg2 = document.getElementById('creative');
var activeImg3 = document.getElementById('thinking');
var activeImg4 = document.getElementById('satisfying');
console.log(activeImg)
activeImg.addEventListener('mouseover', function() {

    //Active hover animation
activeImg.style.background = '#90ccf4';
activeImg.style.transition = 'background-color 0.5s ease'
img1[0].style.opacity = '1';
img1[0].style.transition = 'opacity 0.5s ease';
img1[0].style.height = '60%';
img1[0].style.transition = 'height 0.5s ease-in';
img1[0].style.alignSelf = 'center';
})

activeImg.addEventListener('mouseout', function() {

    
activeImg.style.background = 0;
img1[0].style.opacity = '0';
img1[0].style.transition = 'opacity 0.5s ease';
img1[0].style.height = '10%';
img1[0].style.transition = 'height 0.5s ease-in';
})
//Creative hover animation

    activeImg2.addEventListener('mouseover', function() {

    activeImg2.style.background = '#90ccf4';
    activeImg2.style.transition = 'background-color 0.5s ease'
    img1[1].style.opacity = '1';
    img1[1].style.transition = 'opacity 0.5s ease';
    img1[1].style.height = '60%';
    img1[1].style.transition = 'height 0.5s ease-in';
        
        })

    activeImg2.addEventListener('mouseout', function() {
    activeImg2.style.background = 0;
    img1[1].style.opacity = '0';
    img1[1].style.transition = 'opacity 0.5s ease';
    img1[1].style.height = '10%';
    img1[1].style.transition = 'height 0.5s ease-in';
            })
            
//Thinking hover animation

    activeImg3.addEventListener('mouseover', function() {
    activeImg3.style.background = '#90ccf4';
    activeImg3.style.transition = 'background-color 0.5s ease'
    img1[2].style.opacity = '1';
    img1[2].style.transition = 'opacity 0.5s ease';
    img1[2].style.height = '60%';
    img1[2].style.transition = 'height 0.5s ease-in';
                
             })
    activeImg3.addEventListener('mouseout', function() {
    activeImg3.style.background = 0;
    img1[2].style.opacity = '0';
    img1[2].style.transition = 'opacity 0.5s ease';
    img1[2].style.height = '10%';
    img1[2].style.transition = 'height 0.5s ease-in';
            })
       
             
//Satisfying hover animation

activeImg4.addEventListener('mouseover', function() {
    activeImg4.style.background = '#90ccf4';
    activeImg4.style.transition = 'background-color 0.5s ease'
    img1[3].style.opacity = '1';
    img1[3].style.transition = 'opacity 0.5s ease';
    img1[3].style.height = '60%';
    img1[3].style.transition = 'height 0.5s ease-in';
                
             })
    activeImg4.addEventListener('mouseout', function() {
    activeImg4.style.background = 0;
    img1[3].style.opacity = '0';
    img1[3].style.transition = 'opacity 0.5s ease';
    img1[3].style.height = '10%';
    img1[3].style.transition = 'height 0.5s ease-in';
            })
          
    var navBtns = document.getElementsByClassName("navbtn");
 
    for (var i = 0; i < navBtns.length; i++)
    {
        console.log(navBtns[i]);
        navBtns[i].addEventListener("click", changeColor.bind(null, navBtns[i], navBtns));
    }


});
