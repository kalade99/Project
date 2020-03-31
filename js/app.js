document.addEventListener('DOMContentLoaded', function() {
  // Your code here...

  // Create a User object with the following properties:

  var user = {
    firstName: 'Eimile',
    lastName: 'Zalubaite',
    age: 26,
    occupation: 'CAD Designer',
    friends: ['Lasse', 'Carol', 'Rasa', 'Eva'],
    
    address: {
      number: 98,
      street: 'Turnpike',
      city: 'London',
    },
    hasCar: false,
  



    }



  
  // - firstName = string
  // - lastName = string
  // - age = integer
  // - occupation = string
  // - address = object, with number, street and city as properties
  // - friends = array
  // - hasCar = boolean
  
  
  // Using the existing HTML elements, assign each element its respective property from your new object
  // The first one has been done for you

  // BASIC
  // name
  var nameElement = document.getElementById("name");
  nameElement.innerText = `${user.firstName} ${user.lastName}`;
  // age
  
  var ageElement = document.getElementById('age');
  ageElement.innerText = user.age;
  
 
  
  // occupation
  var occupationElement = document.getElementById("occupation");
  occupationElement.innerText = `${user.occupation}`;
  
  // hasCar
var hasCarElement = document.getElementById('hasCar');
if (hasCar = true ) {
hasCarElement.innerText = 'doest have a car';
} else {

hasCarElement.innerText = 'has a car'  ;
}
  // INTERMEDIATE
  // address number
  var addresNumber = document.getElementById("adrsNumber");
  addresNumber.innerText = user.address.number;

  // address street
  var addressStreet = document.getElementById("adrsStreet");
  addressStreet.innerText = user.address.street;
  // address city
var addressCity = document.getElementById("adrsCity");
addressCity.innerText = user.address.city;
  // ADVANCED
  // loop through the friends and append each one onto the correct element
  var ul = document.getElementById("friends");
for (var i = 0; i < user.friends.lenght; i++) {
  var li = document.createElement('li');
  li.innerText = user.friends[i];
  friends.appendChild(il);
}

})