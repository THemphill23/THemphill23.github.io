import Home from "./components/home"
import About from "./components/about"
import Projects from "./components/project"

export default () => {
    pageBuild();
}


function pageBuild(){
    index();
    displayHome();
    email();
    displayAbout();
    displayProject();
}

function index(){
    const landing = document.querySelector("#app");
    landing.innerHTML = Home()
}

function displayHome(){
    const homeButton = document.querySelector("#homeButton");
    homeButton.addEventListener("click", function(){
        document.querySelector("#app").innerHTML = Home();
    });
}


function email(){
    const emailButton = document.querySelector("#emailButton");
    emailButton.addEventListener("click", function(){
        window.open('mailto:hemphilltaylor@gmail.com')
    });
}

function displayAbout (){
    const aboutButton = document.querySelector("#aboutButton");
    aboutButton.addEventListener("click", function(){
        document.querySelector("#app").innerHTML = About();
    });
}

function displayProject (){
    const projectButton = document.querySelector("#projectsButton");
    projectButton.addEventListener("click", function(){
    document.querySelector("#app").innerHTML = Projects();
    });
}