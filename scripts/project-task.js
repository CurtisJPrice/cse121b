/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#parks");
let parkList = [];

/* async displayTemples Function */
const displayTemples = (parks) => {
    temples.forEach(park => {
        let articleElement = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        let img = document.createElement("img");
        //populate imgElement
        img.setAttribute('src', park.imageUrl);
        img.setAttribute('alt', park.location);
        
        //Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
        articleElement.appendChild(parkName);
        articleElement.appendChild(img);

        //Append the <article> element to the global templesElement variable declared in Step 2
        templesElement.appendChild(articleElement);
    });
}



/* async getTemples Function using fetch()*/

const getTemples = async () => {
    //In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above
    const response = await fetch("Parks-List.json");
    parkList = await response.json();
    displayParks(parkList);
    console.log(parkList);

}

/* reset Function */
const reset = () => {
    parkElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = (parks) => {
    reset();
    switch (document.querySelector('#sortBy').value) {
        case "coast":
            displayParks(parks.filter(park => park.location.includes("Utah")));
            break;
        case "not-coast":
            displayParks(parks.filter(park => !park.location.includes("Utah")));
            break;
        case "older":
            displayParks(parks.filter(park => new Date (park.dedication) < new Date ( 1950, 0, 1)));
        case "all":
            displayParks(parks);
            break;
    }
}



getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(parkList)});