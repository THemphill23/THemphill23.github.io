export default function Home() {
    return `
      <nav>
          <button type="button" name="index" class= "flexItem flexItem--1" id="homeButton">Home</button>
          <button type="button" name="aboutMe" class= "flexItem flexItem--2" id="aboutButton">About Me</button>
          <button type="button" name="projects" class= "flexItem flexItem--3" id="projectsButton">Projects</button>
      </nav>

        <div class="gridHome">
        <section class="grid-item blankSpace">

        </section>
        <img src="/images/meGrin3.jpg" class="grid-item imageMe"></img>
        
        <p class="grid-item introWords">
         Welcome to my portfolio. I have posted multiple projects for your viewing and information about me. I am available for contact.
         Thank you for visiting.
          <br>
          <br>
          Contact
          <br>
          <button type="button" name="email" id="emailButton">Email</button>
            <a href="mailto:hemphilltaylor@gmail.com" id="email"></a>
          hemphilltaylor@gmail.com
          <br>
          <br>
          Phone: 330-998-3421
        </p>
      </div>
        

      <script src="/components/app.js"></script>
      <footer>
        <h6>
          &copy Taylor Hemphill 2019
        </h6>
      </footer>
    `
}