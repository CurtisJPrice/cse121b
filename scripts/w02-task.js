/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
const fullName = "Curtis J. Price";

/* Step 2 - Variables */
const currentYear = new Date().getFullYear();
let profilePicture = "images/IMG_20230911_132428.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let foodFav = [" Chicken", " Pizza", " Red Velvet Cake"]
foodElement.textContent = foodFav;
let foodFav1 = foodFav.push(" Oven Puff Pancakes");
foodElement.innerHTML += `<br>${foodFav}`;
let foodFav2 = foodFav.shift();
foodElement.innerHTML += `<br>${foodFav}`;
let foodFav3 = foodFav.pop();
foodElement.innerHTML += `<br>${foodFav}`;