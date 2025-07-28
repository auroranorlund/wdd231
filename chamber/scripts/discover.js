// Landmark Cards

const url = 'https://auroranorlund.github.io/wdd231/chamber/data/discover.json';
const areas = document.querySelector('#areas');
async function getLandmarkData() {
    const response = await fetch(url);
    const data = await response.json();
    displayLandmarks(data.landmarks);
};

const displayLandmarks = (landmarks) => {
  landmarks.forEach((landmark) => {
    let area = document.createElement("section");
    let name = document.createElement("h2");
    let photoFigure = document.createElement("figure");
    let photo = document.createElement("img");
    let address = document.createElement("address");
    let description = document.createElement("p");
    let button = document.createElement("button");

    name.innerHTML = `${landmark.name}`;

    photo.setAttribute("src", landmark.imageurl);
    photo.setAttribute("alt", `Picture of ${landmark.name}`);
    photo.setAttribute("width", "300");
    photo.setAttribute("height", "200");
    photoFigure.appendChild(photo);

    address.innerHTML = `${landmark.address}`;
    description.innerHTML = `${landmark.description}`;
    button.innerHTML = `Learn More`;

    area.appendChild(name);
    area.appendChild(photoFigure);
    area.appendChild(address);
    area.appendChild(description);
    area.appendChild(button);

    areas.appendChild(area);
  });
}

getLandmarkData();

// Display visits

const visitsP = document.querySelector("#visits");
let currentVisit = new Date();

if (localStorage.getItem("lastVisit") === null) {
  visitsP.innerHTML = `Welcome! Let us know if you have any questions.`;
  localStorage.setItem("lastVisit", currentVisit);
}
else {
  let lastVisit = window.localStorage.getItem("lastVisit");
  let diff = currentVisit.getTime() - Date.parse(lastVisit);
  console.log(diff);
  const milPerDay = 1000 * 60 * 60 * 24;
  diff = diff / milPerDay;
  console.log(diff);
  if (diff < 1) {
    visitsP.innerHTML = `Back so soon! Awesome!`
  }
  else if (Math.round(diff) == 1) {
    visitsP.innerHTML = `You last visited 1 day ago.`
  }
  else {
    visitsP.innerHTML = `You last visited ${Math.round(diff)} days ago.`
  }
  localStorage.setItem("lastVisit", currentVisit);
}
