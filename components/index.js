import Index from "./indexDisplay"

export default ()=>{
displayIndex()
}

const emailButton = document.getElementById('emailButton');
emailButton.onclick = function() {
    window.open('mailto:hemphilltaylor@gmail.com')
}

const indexButton = document.getElementById('indexButton');
indexButton.onclick = function() {
    window.location="/views/index.html"
}

const aboutButton = document.getElementById('aboutButton');
aboutButton.onclick = function() {
    window.location="/views/aboutMe.html"
}

const projectsButton = document.getElementById('projectsButton');
projectsButton.onclick = function() {
    window.location="/views/projects.html"
}

function displayIndex(){
    const indexButton = document.querySelector("#indexButton");
    indexButton.addEventListener("click", function(){
            document.querySelector("#app").innerHTML = Index();
    });
};
