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
    <p class="painting-title">${painting.name} by ${painting.artist},</p>
    `;
    image.setAttribute("src", painting.url);
    image.setAttribute("alt", `${painting.name} by ${painting.artist}`);

    image.addEventListener('click', () => showDetails(painting))

    card.appendChild(image);
    card.appendChild(caption);
    previousPaintings.appendChild(card);

  });
}

export function showDetails(painting) {
    dialogTitle.innerHTML = `${painting.name}`;
    dialog.showModal();
}