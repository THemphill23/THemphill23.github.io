const emailButton = document.querySelector("#emailButton");
const linkedButton = document.querySelector("#linkedButton");
const gitButton = document.querySelector("#gitButton");
const projectsButton = document.querySelector("#projectButton");

emailButton.addEventListener("click", function(){
    window.open('mailto:hemphilltaylor@gmail.com', '_blank')
});

linkedButton.addEventListener("click", function(){
    window.open('https://www.linkedin.com/in/taylorhemphill1123')
});

gitButton.addEventListener("click", function(){
    window.open('https://www.github.com/THemphill23')
});

projectsButton.addEventListener("click", function(){
    window.scrollTo(0, 1000)
})