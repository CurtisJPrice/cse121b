/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Curtis J. Price';

let year = 2023;

let currentYear = document.getElementById('year');
currentYear.textContent = year;

let myImage = new Image;
myImage.src = 'images/IMG_20230911_132428.jpg';

let foodElement = document.getElementById('food');




/* Step 3 - Element Variables */
document.querySelector('img').setAttribute('src', 'images/IMG_20230911_132428.jpg');

const nameElement = document.getElementById('name');

const yearElement = document.querySelector('#year');

const imageElement = ('images/IMG_20230911_132428.jpg');





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture);

foodElement.innerHTML += `<strong>${food}</strong>`;







/* Step 5 - Array */
foodElement = ['Fettucini', 'Steak', 'Chicken', 'Shrimp'];

document.querySelector('#food').textContent = favoriteFoods;

document.querySelector('#food').textContent = favoriteFoods;

food.shift();

document.querySelector('#food').textContent = favoriteFoods;

food.pop();

document.querySelector('#food').textContent = favoriteFoods;