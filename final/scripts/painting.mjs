const url = "https://auroranorlund.github.io/wdd231/final/data/previous-paintings.json";
const details = document.querySelector('#paintingDialog');
details.close();

const detailsButton = document.querySelector('#paintingDialog button');
detailsButton.addEventListener('click', () => details.close());

import { dataFetch, displayPaintings, showDetails } from "./previous-paintings.mjs";
dataFetch(url);

const input = document.querySelector('#note');
const noteButton = document.querySelector('#submit-note');
const list = document.querySelector('#list');

import displayList from "./painting-notes-display.mjs";
import { setNotesList, getNotesList} from "./painting-notes-data.mjs";

noteButton.addEventListener('click', function() {
    if (input.value.trim() !== ""){
        let note = input.value;
        let date = new Date();
        note = `${date}:
        ${note}`
        displayList(note);
        notesArray.push(note);
        setNotesList();
        input.value = "";
        input.focus();
    }
    else {
        input.focus();
    }
});

let notesArray = getNotesList() || [];

notesArray.forEach(note => {
    displayList(note);
});
