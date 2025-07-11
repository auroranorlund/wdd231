const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©<span>${today.getFullYear()}</span>`;
let lastModif = document.querySelector('#lastModified');
lastModif.innerHTML = `${new Date(document.lastModified)}`;