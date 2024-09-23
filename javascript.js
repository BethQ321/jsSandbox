const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = "Hey I'm red!";
content.style.color = "red";

container.appendChild(content);

const moreContent = document.createElement("h3");
moreContent.classList.add("moreContent");
moreContent.textContent = "I'm a blue h3!";
moreContent.style.color = "blue";

container.appendChild(moreContent);

const subContainer = document.createElement("div");
subContainer.classList.add("subContainer");
subContainer.style.border = "solid";
subContainer.style.backgroundColor = "pink";

const headline = document.createElement("h1");
headline.classList.add("headline");
headline.textContent = "I'm in a div";

subContainer.appendChild(headline);

const paragraph = document.createElement("p");
// paragraph.classList.add("paragraph");
paragraph.textContent = "ME TOO!";

subContainer.appendChild(paragraph);

container.appendChild(subContainer);