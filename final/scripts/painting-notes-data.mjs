export function setNotesList() {
    localStorage.setItem('notesList', JSON.stringify(notesArray));
};

export function getNotesList() {
    return JSON.parse(localStorage.getItem('notesList'));
};

export function deleteNote(note) {
    note = note.slice(0, note.length - 1);
    notesArray = notesArray.filter((item) => item !== note);
    setNotesList();
};