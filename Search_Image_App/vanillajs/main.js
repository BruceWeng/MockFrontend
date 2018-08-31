import config from './config.js';

// 0. Declare Unsplash API_URL
const API_URL = `https://api.unsplash.com/search/photos?client_id=${config.ACCESS_KEY}&page=1&query=`;

// 1. Select DOM
const form = document.querySelector('form'); // Select Tag Name
const input = document.querySelector('input');
const loadingImage = document.querySelector('#loadingImage');
loadingImage.style.display = 'none'; // Hide it default

// 2. Add EventListener
form.addEventListener('submit', formSubmitted);

// 3. Define callback func, function name hoisting
// callback naming: "dom + event + ed"
/**
 * Handle Form Submitted with side effect
 * @param {Event} e 
 */
function formSubmitted(e) {
  e.preventDefault();
  const searchTerm = input.value; // value is a DOM property
  /**
   * For a given DOM node object, properties are the properties of that object.
   * And attributes are the elements of the attributes property of that object.
   */
  search(searchTerm);
  console.log(input);
  console.log(searchTerm);
}

function search(searchTerm) {
  loadingImage.style.display = '';
  fetch(`${API_URL}${searchTerm}`)
  .then(res => res.json()) 
  // res.json() returns a promise that resolves with the result of parsing the body text as JSON.
  .then(result => console.log(result));
}


