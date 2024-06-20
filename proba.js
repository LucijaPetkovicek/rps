const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");
redText.textContent = "Hey I’m red!";
redText.style.color = "red";
container.appendChild(redText);
const item = document.createElement("div");
const naslov = document.createElement("h1");

item.appendChild(naslov);
naslov.innerText = "I'm in a div!";
container.appendChild(item);