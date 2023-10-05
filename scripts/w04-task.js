/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Curtis J. Price",
    photo: "images/IMG_20230911_132428.jpg",
    favoriteFoods: [
        "Chicken and Fried Chicken", 
        "Pizza", 
        "Scratch Made Bakes",
        "Dinner Rolls"
    ],
    hobbies: [
        "Video Games", 
        "Walking", 
        "Gundam Plastic Model Kits", 
        "Watching movies and Gundam Build Animes"
    ],
    placesLived : [] 
};




/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place: "Eagle Creek, Oregon", length: "2 years-onward"});
myProfile.placesLived.push({place: "Sheridan, Oregon", length: "3 years"});
myProfile.placesLived.push({place: "Casper, Wyoming", length: "5 Years"});
myProfile.placesLived.push({place: "Pahrump, Nevada", length: "10 Years"});




/* DOM Manipulation - Output */
/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;


/* Favorite Foods List*/
const favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach((food) => {
    const listItem = document.createElement("li");
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
});


/* Hobbies List */
const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach((hobby) => {
    const listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
});


/* Places Lived DataList */
const placesLivedList = document.getElementById("places-lived");

myProfile.placesLived.forEach((place) => {
    const dt = document.createElement("dt");
    dt.textContent = place.place;

    const dd = document.createElement("dd");
    dd.textContent = place.length;

    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});