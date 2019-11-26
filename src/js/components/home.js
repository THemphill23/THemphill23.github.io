export default function Home() {
    return `
      <div class="gridHome">
        <img src="/images/meGrin4.jpg" class="grid-item imageMe"></img>
        
        <p class="grid-item introWords">
         Welcome to my portfolio. I have posted multiple projects for your viewing and information about me. I am available for contact.
         Thank you for visiting.
          <br>
          <br>
          <strong>Contact</strong>
          <br>
          <button type="button" name="email" id="emailButton">Email</button>
          hemphilltaylor@gmail.com
          <br>
          <br>
          <strong>Phone</strong>: 330-998-3421
          <br>
          <br>
          <button type="button" name="linkedIn" id="linkedButton">LinkedIn</button>
          <button type="button" name="git" id="gitButton">GitHub</button>
          <button type="button" name="twitter" id="tweetButton">Twitter</button>
        </p>

        <section class="grid-item summary">
                <h3>Summary</h3>

                I got my Nintendo 64 at a young age and was hooked on video games and technology. 
                I wanted to know how everything worked. In high school and college I pursued learning 
                more about technology and visual mediums. In 2012 I got a computer animation degree. I am 
                currently a Full Stack Developer at We Can Code It with four years of professional experience. 
                I am proficient in C#, HTML, CSS, MVC, JavaScript, and Autodesk Maya and will be certified in 
                December, 2019. My hobbies include video games, movies, television, comics, 
                and Dungeons and Dragons.
        </section>

        <section class="grid-item tech" id="tech">
            <h3>Skills</h3>

              C# ⦁ .NET Core ⦁ Active Server Pages / ASP.net ⦁ JavaScript ⦁ Flexbox ⦁ MVC ⦁ HTML ⦁ CSS 
              ⦁ Grid ⦁ TDD ⦁ Agile (Scrum) ⦁ Object Oriented Programming(OOP) ⦁ AJAX ⦁ JSON ⦁ React 
              ⦁ Restful APIs ⦁ Responsive Design / Mobile ⦁ Structured Query Language(SQL) 
              ⦁ Relational Databases / MS SQL ⦁ Source Control / GitHub  ⦁ Microsoft Office  ⦁  Autodesk Maya  ⦁ Nuke  
              ⦁ AS400  ⦁ Dreamweaver
        </section>
  </div>
  `
}