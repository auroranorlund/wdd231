const url = "https://auroranorlund.github.io/wdd231/chamber/data/members.json";
let cards = document.querySelector("#businesses");


let dataFilteredCopy = [];
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    dataFiltered = data.members.filter(member => member.membership > 1);
    // Wouldn't let me get length of dataFiltered so had to copy into new array to force it to work
    dataFiltered.forEach((member) => dataFilteredCopy.push(member));
    createBusinessCards(dataFilteredCopy);
    }

function createBusinessCards(dataFiltered) {
    let randomCards = [];
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * (dataFiltered.length));
        console.log(random);
        randomCards.push(dataFiltered[random]);
        dataFiltered.splice(random, 1);
    }
    randomCards.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let membership = document.createElement("p");
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

        if (member.membership == 2) {
            membership.innerHTML = `Silver Member`;
        }
        else if (member.membership == 3){
            membership.innerHTML = `Gold Member`;
        }
        else {
            membership.innerHTML = "";
        }

        membership.setAttribute("class", "membership");
        address.setAttribute("class", "details");
        phone.setAttribute("class", "details");
        url.setAttribute("class", "details");

        card.appendChild(name);
        card.appendChild(membership);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        cards.appendChild(card);
    });
};

getBusinessData();