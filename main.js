const emailButton = document.getElementById("emailButton");
const linkedButton = document.querySelector("#linkedButton");
const gitButton = document.querySelector("#gitButton");

emailButton.addEventListener("click", function(){
    window.open('mailto:hemphilltaylor@gmail.com', '_blank')
});

linkedButton.addEventListener("click", function(){
    window.open('https://www.linkedin.com/in/taylorhemphill1123')
});

gitButton.addEventListener("click", function(){
    window.open('https://www.github.com/THemphill23')
});

// function tweets(){
//     const tweetButton = document.querySelector("#tweetButton");
//     tweetButton.addEventListener("click", function(){
//         window.open('https://www.twitter.com/themphill23')
//     });
// }