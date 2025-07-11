async function getBusinessData() {
    const response = await fetch("");
    const data = await response.json();
    console.table(data.members);
    //displayProphets(data.prophets)
};

let cardDiv = document.querySelector("#cards");

/*
function createDirectoryCard() {
    cardDiv.innerHTML = "";
    filteredCourses.forEach(course => {
        let card = document.createElement("span");
        card.innerHTML = `${course.subject}${course.number}`;
        card.classList.add("card");
        if (course.completed) {
            card.classList.add("completed");
        }
        creditTotal = creditTotal + course.credits;
        cardDiv.appendChild(card);
    });
    creditNumber.innerHTML = `${creditTotal}`;
}
    */