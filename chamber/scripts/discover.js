const url = 'https://auroranorlund.github.io/wdd231/chamber/data/discover.json';
const cards = document.querySelector('#areas');
async function getLandmarkData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.landmarks);
    //displayProphets(data.landmarks)
};

const displayLandmarks = (landmarks) => {
  landmarks.forEach((landmark) => {
    let area = document.createElement("section");
    let name = document.createElement("h2");
    let photoFigure = document.createElement("figure")
    let photo = document.createElement("img");
    let address = document.createElement("address");
    let description = document.createElement("p");

    name.innerHTML = `${landmark.name}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");
    birthdate.innerHTML = `Date of Birth: ${prophet.birthdate}`;
    birthplace.innerHTML = `Place of Birth: ${prophet.birthplace}`

    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
}
getProphetData();