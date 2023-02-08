const container = document.querySelector(".container");
const newSection = document.createElement('div');
newSection.classList.add('section6');
newSection.textContent = "This is section6";
container.appendChild(newSection);
const sections = container.querySelectorAll(".container > div");
container.style.backgroundColor = "blue";
console.log(sections);