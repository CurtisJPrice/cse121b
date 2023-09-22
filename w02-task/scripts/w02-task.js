/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Curtis J. Price';

let year = 2023;

let currentYear = document.getElementById('year');
currentYear.textContent = year;

let myImage = new Image;
myImage.src = 'images/IMG_20230911_132428.jpg';




/* Step 3 - Element Variables */
document.querySelector('img').setAttribute('src', 'images/IMG_20230911_132428.jpg');

const nameElement = document.getElementById('name');

const yearElement = document.querySelector('#year');

const imageElement = ('images/IMG_20230911_132428.jpg');





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture);







/* Step 5 - Array */
let food = document.getElementById('food');

const foodElement = food

const foods = ['Enchiladas', ' Tacos', ' Arroz con frijoles', ' Quesadillas']






