import { deleteNote } from "./painting-notes-data.mjs";
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.setAttribute("class", "delete")
    deleteButton.textContent = "X";
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    deleteNote(li.textContent);
    input.focus();
    })
};

export default displayList;