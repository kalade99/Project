document.addEventListener('DOMContentLoaded', function() {

    var list = document.getElementsByTagName('li');
    console.log(list);

    var listItems = document.querySelectorAll('#list li');
    // iterate over the <li> elements
    listItems.forEach(function (listItem) {
    // this function is called for each <li> element
    listItem.addEventListener('click', function () {
    // as soon as the list item is clicked, change its color to red
    this.style.color = 'red';
  });
});

 /*   list[0].addEventListener('click', function(event) {
        console.log(event);
        console.log(event.target);

        event.target.style.color = '#90ccf4';    
    });

    list[1].addEventListener('click', function(event) {
        console.log(event);
        console.log(event.target);
        event.target.style.color = '#90ccf4'; 
    });*/
}); 