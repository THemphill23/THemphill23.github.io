import Project from "../components/projectDisplay"

export default ()=>{
displayProject()
}

const demoButton = document.getElementById('demoButton');
const clashButton = document.getElementById('clashButton');
const reviewButton = document.getElementById('reviewButton');
const hospitalButton = document.getElementById('albumButton');
const blogButton = document.getElementById('blogButton');
const blackjackButton = document.getElementById('blackjackButton');

function displayProject (){
    Project()

    demoButton.addEventListener("click", function() {
        window.open("https://youtu.be/xyEOq86A1xc", "_blank")
    });

    clashButton.addEventListener("click", function() {
        window.open("https://github.com/THemphill23/ApiMastery", "_blank")
    });

    reviewButton.addEventListener("click", function() {
        window.open("https://github.com/THemphill23/MvcProject-1", "_blank")
    });

    hospitalButton.addEventListener("click", function() {
        window.open("https://github.com/THemphill23/AlbumProject", "_blank")
    });

    blogButton.addEventListener("click", function() {
        window.open("https://github.com/THemphill23/MvcMasteryBlog", "_blank")
    });

    blackjackButton.addEventListener("click", function() {
        window.open("https://github.com/THemphill23/BlackJackProject", "_blank")
    });

}