import Home from "./homeDisplay"

export default ()=>{
    displayHome()
}

function displayHome(){
    const homeButton = document.querySelector("#indexButton");
    homeButton.addEventListener("click", function(){
            document.querySelector("#app").innerHTML = Home();
    });
};

const emailButton = document.getElementById('emailButton');
emailButton.onclick = function() {
    window.open('mailto:hemphilltaylor@gmail.com')
}

const indexButton = document.getElementById('homeButton');
indexButton.onclick = function() {
    window.location="/views/home.html"
}

const aboutButton = document.getElementById('aboutButton');
aboutButton.onclick = function() {
    window.location="/views/aboutMe.html"
}

const projectsButton = document.getElementById('projectsButton');
projectsButton.onclick = function() {
    window.location="/views/projects.html"
}

