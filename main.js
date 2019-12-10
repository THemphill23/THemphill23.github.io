const emailButton = document.querySelector("#emailButton");
const linkedButton = document.querySelector("#linkedButton");
const gitButton = document.querySelector("#gitButton");
const projectsButton = document.querySelector("#projectButton");

const clashButton = document.querySelector("#clashButton");
const smallButton = document.querySelector("#smallButton");
const reviewButton = document.querySelector("#reviewButton");
const albumButton = document.querySelector("#albumButton");
const blogButton = document.querySelector("#blogButton");
const demoButton = document.querySelector("#demoButton");

emailButton.addEventListener("click", function(){
    window.open('mailto:hemphilltaylor@gmail.com', '_blank')
});

linkedButton.addEventListener("click", function(){
    window.open('https://www.linkedin.com/in/taylorhemphill1123')
});

gitButton.addEventListener("click", function(){
    window.open('https://www.github.com/THemphill23')
});

projectsButton.addEventListener("click", function(){
    window.scrollTo(0, 1000)
})

/*Projects*/
clashButton.addEventListener("click", function(){
    window.open("https://github.com/THemphill23/ApiMastery")
});

smallButton.addEventListener("click", function(){
    window.open("https://github.com/THemphill23/Focus")
});

reviewButton.addEventListener("click", function(){
    window.open("https://github.com/THemphill23/MvcProject-1")
});

albumButton.addEventListener("click", function(){
    window.open("https://github.com/THemphill23/AlbumProject")
});

blogButton.addEventListener("click", function(){
    window.open("https://github.com/THemphill23/MvcMasteryBlog")
});

demoButton.addEventListener("click", function(){
    window.open("https://youtu.be/xyEOq86A1xc")
});

/*Projects*/