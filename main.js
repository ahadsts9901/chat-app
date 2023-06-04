//date and time

setInterval(() => {
    let currentTime = moment().format("dddd MMMM Do YYYY, h:mm a");

    document.getElementById("date").innerText = currentTime;
}, 1);

//user 1

let form = document.querySelector(".form");
let input = document.querySelector(".input1");
let section = document.querySelector("section");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputValue = input.value.trim();

    if (inputValue !== "") {
        let currentTime = moment().format("dddd MMMM Do YYYY, h:mm a");

        let message = document.createElement("div");
        message.className += " message";
        section.appendChild(message);

        let para = document.createElement("p");
        para.className += " para";
        para.innerText = input.value;
        message.appendChild(para);

        let row = document.createElement("div");
        row.className += " row-message";
        message.appendChild(row);

        let del = document.createElement("div");
        del.className += " p-small";
        del.innerHTML = "<i class='bi bi-trash-fill'></i>";
        del.addEventListener("click", deleteMessage);
        row.appendChild(del);

        let time = document.createElement("p");
        time.className += " p-small";
        time.style.textAlign = "right";
        time.innerHTML = `${currentTime}`;
        row.appendChild(time);
    }

    input.value = "";
});

//delete user 1

function deleteMessage(event) {
    event.preventDefault();
    let target = event.target.closest(".message");
    target.remove();
}

//delete all

function deleteMessages() {
    let section = document.querySelector("section");
    section.innerHTML = "";
}

//delete user 2

function deleteMessage2(event) {
    event.preventDefault();
    let target = event.target.closest(".message2");
    target.remove();
}

//delete all user 2

// function deleteMessages() {
//     let messages = document.querySelectorAll('.message');
//     messages.forEach(message => {
//         message.remove();
//     });
// }

//user 2

let form2 = document.querySelector(".form2");
let input2 = document.querySelector(".input2");

form2.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputValue = input2.value.trim();

    if (inputValue !== "") {
        let currentTime = moment().format("dddd MMMM Do YYYY, h:mm a");

        let message = document.createElement("div");
        message.className += " message2";
        section.appendChild(message);

        let para = document.createElement("p");
        para.className += " para";
        para.innerText = input2.value;
        message.appendChild(para);

        let row = document.createElement("div");
        row.className += " row-message";
        message.appendChild(row);

        let del = document.createElement("div");
        del.className += " p-small";
        del.innerHTML = "<i class='bi bi-trash-fill'></i>";
        del.addEventListener("click", deleteMessage2);
        row.appendChild(del);

        let time = document.createElement("p");
        time.className += " p-small";
        time.style.textAlign = "right";
        time.innerHTML = `${currentTime}`;
        row.appendChild(time);
    }

    input2.value = "";
});