setInterval(() => {
    let currentTime = moment().format("dddd MMMM Do YYYY, h:mm a");

    document.getElementById("date").innerText = currentTime;
}, 1);

let form = document.querySelector("form");
let input = document.querySelector(".input");
let section = document.querySelector("section");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputValue = input.value.trim();

    if (inputValue !== "") {
        let currentTime = moment().format("dddd MMMM Do YYYY, h:mm a");

        let message = document.createElement("div");
        message.className += " message";
        message.innerText = input.value;
        section.appendChild(message);

        let row = document.createElement("div");
        row.className += " row-message";
        message.appendChild(row);

        let del = document.createElement("div");
        del.className += " p-small";
        del.innerHTML = "<i class='bi bi-trash-fill'></i>";
        row.appendChild(del);

        let time = document.createElement("p");
        time.className += " p-small";
        time.style.textAlign = "right";
        time.innerHTML = `${currentTime}`;
        row.appendChild(time);
    }

    input.value = "";
});