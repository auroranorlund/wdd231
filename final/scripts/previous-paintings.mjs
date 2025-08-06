export async function dataFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayPaintings(data.paintings);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

export function displayPaintings(paintings) {
    const previousPaintings = document.querySelector('#previous-paintings');
  paintings.forEach((painting) => {
    let card = document.createElement("figure");
    let caption = document.createElement("figcaption");
    let image = document.createElement("img");

    caption.innerHTML = `
    <p>${painting.month} ${painting.featureYear}</p>
    <p><span class="italics">${painting.name}</span> by ${painting.artist}, ${painting.year}</p>
    `;
    image.setAttribute("src", painting.url);
    image.setAttribute("alt", `${painting.name} by ${painting.artist}`);
    image.setAttribute("loading", "lazy");

    image.addEventListener('click', () => showDetails(painting))

    card.appendChild(image);
    card.appendChild(caption);
    previousPaintings.appendChild(card);

  });
}

export function showDetails(painting) {
    const dialog = document.querySelector('#paintingDialog');
    const dialogTitle = document.querySelector('#paintingDialog h3');
    const dialogP = document.querySelector('#paintingDialog p');
    const dialogImg = document.querySelector('#paintingDialog img');

    dialogTitle.innerHTML = `<span class="italics">${painting.name}</span> by ${painting.artist}, ${painting.year}`;
    dialogP.innerHTML = `${painting.description}`;
    dialogImg.setAttribute("src", painting.url);

    dialog.showModal();
}