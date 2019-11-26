import Home from "./components/home"
import Projects from "./components/project"

export default () => {
    pageBuild();
}

function pageBuild(){
    index();
    displayHome();
    email();
    linked();
    gitHub();
    tweets();
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

function linked(){
    const linkedButton = document.querySelector("#linkedButton");
    linkedButton.addEventListener("click", function(){
        window.open('https://www.linkedin.com/in/taylorhemphill1123')
    });
}

function gitHub(){
    const gitButton = document.querySelector("#gitButton");
    gitButton.addEventListener("click", function(){
        window.open('https://www.github.com/THemphill23')
    });
}

function tweets(){
    const tweetButton = document.querySelector("#tweetButton");
    tweetButton.addEventListener("click", function(){
        window.open('https://www.twitter.com/themphill23')
    });
}

function displayProject (){
    const projectButton = document.querySelector("#projectsButton");
    projectButton.addEventListener("click", function(){
    document.querySelector("#app").innerHTML = Projects();
    });
}