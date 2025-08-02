const url = "https://auroranorlund.github.io/wdd231/final/data/previous-paintings.json";
const dialog = document.querySelector('#paintingDialog');
const dialogTitle = document.querySelector('#paintingDialog h3');
const dialogButton = document.querySelector('#paintingDialog button');
const dialogP = document.querySelector('#paintingDialog p');

dialogButton.addEventListener('click', () => dialog.close());

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
