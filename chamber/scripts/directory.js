const url = "https://auroranorlund.github.io/wdd231/chamber/data/members.json";
let cards = document.querySelector("#cards");

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    createDirectoryCards(data.members);
};

const createDirectoryCards = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let url = document.createElement("p");

    name.innerHTML = `${member.name}`;
    logo.setAttribute("src", member.logo);
    logo.setAttribute("alt", `${member.name} business logo`);
    logo.setAttribute("loading", "lazy");
    address.innerHTML = `${member.address}`;
    phone.innerHTML = `${member.phone}`;
    url.innerHTML = `<a href="${member.url}">${member.url}</a>`;

    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    cards.appendChild(card);
  });
};

getBusinessData();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});