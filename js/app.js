document.addEventListener('DOMContentLoaded', function() {
  // Your code here...

  // Create a User object with the following properties:
  // - firstName = string
  // - lastName = string
  // - age = integer
  // - occupation = string
  // - address = object, with number, street and city as properties
  // - friends = array
  // - hasCar = boolean
  var user = {
    firstName: 'fred',
    lastName: 'Duffield',
    age: 23,
    occupation: 'Software Engineer',
    address: {
      number: 2,
      street: 'Row 57',
      city: 'London',
    },
    friends: ['Sarai', 'Harry', 'Jonny', 'Isabelle'],
    hasCar: false
  }
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
  
  // hasCar

  // INTERMEDIATE
  // address number
  var numElement = document.getElementById('adrsNumber');
  numElement.innerText = user.address.number
  
  // address street
  
  // address city

  // ADVANCED
  // loop through the friends and append each one onto the correct element
  var friends = document.getElementById('friends');
  for(let i = 0; i < user.friends.length; i++) {
    const newListItem = document.createElement('li'); 
    newListItem.innerText = user.friends[i]; 
    friends.appendChild(newListItem);
  }
})