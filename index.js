let partyList = [];

const ul = document.querySelector("ul");
const form = document.querySelector(".addEventForm")

function render() {
    const html = partyList.map((party) => {
        return `<li>
        <h2> ${party.name} </h2>
        <h4> ${party.date} </h4>
        <h4> ${party.location} </h4>
        <p> ${party.description} </P>
        </li>
        `
    })
    ul.innerHTML += html.join("");
}

async function getPartyList () {
    const partyFetch = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FTB-ET-WEB-FT/events");
    const partyAll = await partyFetch.json();
    partyList = partyAll.data;

    render();
}

getPartyList();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("This button has not been completed. Try again later!")
})