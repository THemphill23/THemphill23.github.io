import displayHome from "./components/home"
// import email from "./home"
// import displayAbout from "./components/about"
// import displayProjects from "./components/projects"

export default () => {
    pageBuild();
}


function pageBuild(){
    index();
    showEmail();
}


function index(){
    const landing = document.querySelector("#app");
    landing.innerHTML = displayHome()
    
    // const homeButton = document.querySelector("homeButton");
    // homeButton.addEventListener("click", function(){
    //     document.querySelector("#app").innerHTML = displayHome();
    // })
    
    // const aboutButton = document.querySelector("aboutButton");
    // aboutButton.addEventListener("click",  function() {
    //     document.querySelector("#app").innerHTML = displayAbout();
    // });
    
    // const projectsButton = document.querySelector("projectsButton");
    // projectsButton.addEventListener("click", function() {
    //     document.querySelector("#app").innerHTML = displayProjects();
    // });
}

// function showEmail(){
//     email()
// }