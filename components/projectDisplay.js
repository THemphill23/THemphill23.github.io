export default function About() {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Professional Portfolio</title>
        <link rel="stylesheet" href="/style/projectStyle.css" />
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
    </head>
<header>
    <h5>
        Taylor Hemphill Portfolio
    </h5>
    <img src="/images/banner2.jpg" class="imageBanner"></img>
</header>
    <body>
        <nav>
            <button type="button" name="index" class= "flexItem flexItem--1" id="homeButton">Home</button>
            <button type="button" name="aboutMe" class= "flexItem flexItem--2" id="aboutButton">About Me</button>
            <button type="button" name="projects" class= "flexItem flexItem--3" id="projectsButton">Projects</button>
        </nav>
        
    <article class="gridTwo">

        <article class="grid-item grid-item-1">
            <section id="title">Clash of the Characters</section>
            <p class="gitLink">
                <button type="button" name="pets" id="clashButton">GitHub</button>
                <section id="techStack">Visual Studio, C#, Visual Studio Code, HTML, CSS, JS, Restful API, SQL</section>
                <img src="/images/clash.png" class="projectIMG"></img>
            </p>
        </article>

        <article class="grid-item grid-item-2">
            <section id="title">Reviews Site</section>
            <p class="gitLink">
                <button type="button" name="reviews" id="reviewButton">GitHub</button>
                <section id="techStack">Visual Studio, C#, MVC, HTML, CSS, SQL</section>
                <img src="/images/review.jpg" class="projectIMG"></img>
                </p>
        </article>

        <article class="grid-item grid-item-3">
            <section id="title">Demonstration Reel</section>
            <p class="gitLink">
            <button type="button" name="demoReel" id="demoButton">Video</button>
            <section  id="techStack">Autodesk Maya, Nuke</section>section>
            <img src="/images/D-Reel3.jpg" class="projectIMG"></img>
            </p>
        </article>
        
        <article class="grid-item grid-item-4">
            <section id="title">Album API</section>
            <p class="gitLink">
            <button type="button" name="hospital" id="albumButton">GitHub</button>
            <section id="techStack">Visual Studio, C#, Visual Studio Code, HTML, CSS, JS, Restful API, SQL</section>
            <img src="/images/album.png" class="projectIMG"></img>
            </p>
        </article>

        <article class="grid-item grid-item-5">
            <ssecction id="title">Blog Site</section>
            <p class="gitLink">
            <button type="button" name="blog" id="blogButton">GitHub</button>
            <section id="techStack">Visual Studio, C#, MVC, HTML, CSS, SQL</section>
            <img src="/images/blog.png" class="projectIMG"></img>
            </p>
        </article>

        <article class="grid-item grid-item-6">
            <section id="title">Black Jack Web App</section>
            <p class="gitLink">
            <button type="button" name="blackjack" id="blackjackButton">GitHub</button>
            <section id="techStack">Visual Studio Code, HTML, CSS, JavaScript</section>
            <img src="/images/blackjackpic.png" class="projectIMG"></img>
            </p>
        </article>
    </article>

    <script src="/components/projects.js"></script>
    <footer>
        <h6>
            &copy Taylor Hemphill 2019
        </h6>
    </footer>
</body>

</html>
    `
}