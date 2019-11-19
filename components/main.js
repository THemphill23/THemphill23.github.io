import displayHome from "./components/index"
import displayAbout from "./components/about"
import displayProjects from "./components/projects"

export default () => {
    pageBuild();
}


function pageBuild(){
    index();
}

const emailButton = document.querySelector("emailButton");
const homeButton = document.querySelector("homeButton");
const aboutButton = document.querySelector("aboutButton");
const projectsButton = document.querySelector("projectsButton");
const landing = document.querySelector("#app");

function index(){
    landing.innerHTML = displayHome()

    homeButton.addEventListener("click", function(){
        document.querySelector("#app").innerHTML = displayHome();
    })

    aboutButton.addEventListener("click",  function() {
        document.querySelector("#app").innerHTML = displayAbout();
    });
    
    projectsButton.addEventListener("click", function() {
        document.querySelector("#app").innerHTML = displayProjects();
    });
    
    emailButton.addEventListener("click", function() {
        window.open('mailto:hemphilltaylor@gmail.com')
    });

}