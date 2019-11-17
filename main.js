import displayAbout from "./components/about"
import displayIndex from "./components/index"
import displayProjects from "./components/projects"

export default () => {
    pageBuild();
}

function pageBuild(){
    index();
    about();
    projects();
}

function index(){
    displayIndex();
}

function about(){
    displayAbout();
}
function projects(){
    displayProjects();
}