import Home from "./homeDisplay"

export default ()=>{
    displayHome()
}
const emailButton = document.getElementById('emailButton');

function displayHome(){
    Home()

    emailButton.addEventListener("click", function() {
        window.open('mailto:hemphilltaylor@gmail.com')
    });

}
