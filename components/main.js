import displayHome from "./components/index"
import displayAbout from "./components/about"
import displayProjects from "./components/projects"

export default () => {
    pageBuild();
}


function pageBuild(){
    index();
    // home();
    about();
    projects();
}

function index(){
    const landing = document.querySelector("#app");
    landing.innerHTML = displayHome()
    const homeButton = document.querySelector("#homeButton");
    homeButton.addEventListener("click", function(){
    document.querySelector("#app").innerHTML = displayHome();
    })
}

// function home(){
//     displayHome();
// }

function about(){
    displayAbout();
}
function projects(){
    displayProjects();
}