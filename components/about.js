import About from "./aboutDisplay"

export default ()=>{
displayAbout()
}

const gitButton = document.getElementById('gitButton');
gitButton.onclick = function() {
    window.open('https://github.com/THemphill23', '_blank')
}

const linkedButton = document.getElementById('linkedButton');
linkedButton.onclick = function() {
    window.open("https://www.linkedin.com/in/taylorhemphill1123", "_blank")
}

const tweetButton = document.getElementById('tweetButton');
tweetButton.onclick = function() {
    window.open("https://twitter.com/themphill23", "_blank")
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

function displayAbout(){
    const aboutButton = document.querySelector("#aboutButton");
    aboutButton.addEventListener("click", function(){
            document.querySelector("#app").innerHTML = About();
    });
};

