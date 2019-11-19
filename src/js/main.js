import Home from "./components/home"
import About from "./components/about"
import Projects from "./components/project"

export default () => {
    pageBuild();
}


function pageBuild(){
    index();
    displayHome();
    // email();
    displayAbout();
    // aboutButtons();
    displayProject();
    // projectButtons();
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


// function email(){
//     const emailButton = document.getElementById("#emailButton");
//     emailButton.addEventListener("click", function(){
//         window.open('mailto:hemphilltaylor@gmail.com')
//     });
// }

function displayAbout (){
    const aboutButton = document.querySelector("#aboutButton");
    aboutButton.addEventListener("click", function(){
    document.querySelector("#app").innerHTML = About();
    });
}

// function aboutButtons(){  
//     const gitButton = document.getElementById("#gitButton");
//     gitButton.addEventListener("click", function() {
//         window.open('https://github.com/THemphill23', '_blank')
//     });
    
//     const linkedButton = document.getElementById("#linkedButton");
//     linkedButton.addEventListener("click", function() {
//         window.open("https://www.linkedin.com/in/taylorhemphill1123", "_blank")
//     });
    
//     const tweetButton = document.getElementById("#tweetButton");
//     tweetButton.addEventListener("click", function() {
//         window.open("https://twitter.com/themphill23", "_blank")
//     });
// }

function displayProject (){
    const projectButton = document.querySelector("#projectsButton");
    projectButton.addEventListener("click", function(){
    document.querySelector("#app").innerHTML = Projects();
    });
}

// function projectButtons(){
//     const demoButton = document.getElementById("#demoButton");
//     demoButton.addEventListener("click", function() {
//         window.open("https://youtu.be/xyEOq86A1xc", "_blank")
//     });
    
//     const clashButton = document.getElementById("#clashButton");
//     clashButton.addEventListener("click", function() {
//         window.open("https://github.com/THemphill23/ApiMastery", "_blank")
//     });

//     const reviewButton = document.getElementById("#reviewButton");
//     reviewButton.addEventListener("click", function() {
//         window.open("https://github.com/THemphill23/MvcProject-1", "_blank")
//     });

//     const hospitalButton = document.getElementById("#albumButton");
//     hospitalButton.addEventListener("click", function() {
//         window.open("https://github.com/THemphill23/AlbumProject", "_blank")
//     });

//     const blogButton = document.getElementById("#blogButton");
//     blogButton.addEventListener("click", function() {
//         window.open("https://github.com/THemphill23/MvcMasteryBlog", "_blank")
//     });

//     const blackjackButton = document.getElementById("#blackjackButton");
//     blackjackButton.addEventListener("click", function() {
//         window.open("https://github.com/THemphill23/BlackJackProject", "_blank")
//     });

// }