export default function About() {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Professional Portfolio</title>
        <link rel="stylesheet" href="/style/aboutStyle.css" />
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
    <div class="gridMe">
        <section class="grid-item grid-item_1">
            <img src="/images/meSmile3.jpg" class="imageAbout"></img>
        </section>

        <section class=defineMe>
            <p class="grid-item grid-item-2">
                    <h3>Summary</h3>

                    I got my Nintendo 64 at a young age and was hooked on video games and technology. 
                    I wanted to know how everything worked. In high school and college I pursued learning 
                    more about technology and visual mediums. In 2012 I got a computer animation degree. I am 
                    currently a Full Stack Developer at We Can Code It with four years of professional experience. 
                    I am proficient in C#, HTML, CSS, MVC, JavaScript, and Autodesk Maya and will be certified in 
                    December, 2019. My hobbies include video games, movies, television, comics, 
                    and Dungeons and Dragons.
            </p>
        </section>
        <section >
            <p class="grid-item grid-item-3">   
            <h3>Contact</h3>
            <button type="button" name="linkedIn" id="linkedButton">LinkedIn</button>
            <button type="button" name="git" id="gitButton">GitHub</button>
            <button type="button" name="twitter" id="tweetButton">Twitter</button>
            
            <h3>Skills</h3>
            <section id="tech">
                C# ⦁ .NET Core ⦁ Active Server Pages / ASP.net ⦁ JavaScript ⦁ Flexbox ⦁ MVC ⦁ HTML ⦁ CSS 
                ⦁ Grid ⦁ TDD ⦁ Agile (Scrum) ⦁ Object Oriented Programming(OOP) ⦁ AJAX ⦁ JSON ⦁ React 
                ⦁ Restful APIs ⦁ Responsive Design / Mobile ⦁ Structured Query Language(SQL) 
                ⦁ Relational Databases / MS SQL ⦁ Source Control / GitHub  ⦁ Microsoft Office  ⦁  Autodesk Maya  ⦁ Nuke  
                ⦁ AS400  ⦁ Dreamweaver
            </section>
            </p>
            
        </section>
    </div>

    <script src="/components/about.js"></script>
    <footer>
        <h6>
            &copy Taylor Hemphill 2019
        </h6>
    </footer>
    </body>

</html>
`
}