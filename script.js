const http = require('http');
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kindegarthen_db'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Perform database operations here

// Close the connection when done
// connection.end((err) => {
//   if (err) {
//     console.error('Error closing database connection:', err);
//     return;
//   }
//   console.log('Connection closed');
// });
// Get form elements
// const form = document.querySelector('form');
// const childName = document.querySelector('input[name="child-name"]');
// const childAge = document.querySelector('input[name="child-age"]');
// const genderRadios = document.querySelectorAll('input[name="gender"]');
// const childLocation = document.querySelector('input[name="child-location"]');
// const parentName = document.querySelector('input[name="parent-name"]');
// const parentPhone = document.querySelector('input[name="parent-phone"]');
// const parentEmail = document.querySelector('input[name="parent-email"]');
// const checkboxes = document.querySelectorAll('input[name="check"]');

// // Add event listener to the form
// form.addEventListener('submit', function(event) {
//   // Reset error messages
//   clearErrorMessages();

//   let isValid = true;

//   // Validate child name
//   if (childName.value.trim() === '') {
//     showError(childName, 'Child name is required');
//     isValid = false;
//   }

//   // Validate child age
//   if (childAge.value.trim() === '') {
//     showError(childAge, 'Child age is required');
//     isValid = false;
//   }

//   // Validate gender
//   let genderSelected = false;
//   genderRadios.forEach(function(radio) {
//     if (radio.checked) {
//       genderSelected = true;
//     }
//   });
//   if (!genderSelected) {
//     showError(genderRadios[0], 'Please select a gender');
//     isValid = false;
//   }

//   // Validate child location
//   if (childLocation.value.trim() === '') {
//     showError(childLocation, 'Child location is required');
//     isValid = false;
//   }

//   // Validate parent name
//   if (parentName.value.trim() === '') {
//     showError(parentName, 'Parent name is required');
//     isValid = false;
//   }

//   // Validate parent phone
//   if (parentPhone.value.trim() === '') {
//     showError(parentPhone, 'Parent phone is required');
//     isValid = false;
//   }

//   // Validate parent email
//   if (parentEmail.value.trim() === '') {
//     showError(parentEmail, 'Parent email is required');
//     isValid = false;
//   }

//   // Validate checkboxes
//   let checkboxChecked = false;
//   checkboxes.forEach(function(checkbox) {
//     if (checkbox.checked) {
//       checkboxChecked = true;
//     }
//   });
//   if (!checkboxChecked) {
//     showError(checkboxes[0], 'Please check at least one option');
//     isValid = false;
//   }

//   // Prevent form submission if any field is invalid
//   if (!isValid) {
//     event.preventDefault();
//   }
// });

// // Helper functions
// function showError(element, message) {
//   const errorContainer = document.createElement('div');
//   errorContainer.classList.add('error-message');
//   errorContainer.textContent = message;
//   element.parentNode.insertBefore(errorContainer, element.nextSibling);
// }

// function clearErrorMessages() {
//   const errorMessages = document.querySelectorAll('.error-message');
//   errorMessages.forEach(function(message) {
//     message.remove();
//   });
// }

