

const templesElement = document.querySelector("#parks");
let parkList = [];


const displayTemples = (parks) => {
    temples.forEach(park => {
        let articleElement = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        let img = document.createElement("img");

        img.setAttribute('src', park.imageUrl);
        img.setAttribute('alt', park.location);
        

        articleElement.appendChild(parkName);
        articleElement.appendChild(img);


        templesElement.appendChild(articleElement);
    });
}





const getTemples = async () => {

    const response = await fetch("Parks-List.json");
    parkList = await response.json();
    displayParks(parkList);
    console.log(parkList);

}

/* reset Function */
const reset = () => {
    parkElement.innerHTML = "";
}


const sortBy = (parks) => {
    reset();
    switch (document.querySelector('#sortBy').value) {
        case "state":
            displayParks(parks.filter(park => park.location.includes("Oregon")));
            break;
        case "not-state":
            displayParks(parks.filter(park => !park.location.includes("Oregon")));
            break;
        case "all":
            displayParks(parks);
            break;
    }
}



getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(parkList)});