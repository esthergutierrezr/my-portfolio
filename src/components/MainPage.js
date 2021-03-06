import React from "react";
import "./MainPage.css";
import BurguerMenu from "./BurgerMenu";

function MainPage() {
  return (
    <div className="">
      {/* -- Navigation Menus -- */}

      <div class="navbar">
        <div class="navbar__title navbar__item">Esther Gutierrez</div>
        <BurguerMenu />
        <ul class="navbar">
          <li>
            <a class="navbar__item" href="#home">
              Home
            </a>
          </li>
          <li>
            <a class="navbar__item" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="navbar__item" href="#portfolio">
              Porfolio
            </a>
          </li>
          <li>
            <a class="navbar__item" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* -- Jumbotron  -- */}

      <div class="jumbotron" id="home">
        <div id="home-container">
          <div>
            <h1 id="cloud">Full-Stack Web Developer</h1>
          </div>
          <h3>Javascript | React.js | Node.js</h3>
          <hr />
          <div
            class="btn-group"
            role="group"
            aria-label="..."
            id="social-group"
          >
            <a href="https://github.com/esthergutierrezr" target="_blank">
              <button type="button" class="btn btn-default">
                <i class="fab fa-github"></i>&nbsp;&nbsp;GitHub
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/esther-gutierrez-rodriguez/o"
              target="_blank"
            >
              <button type="button" class="btn btn-default">
                <i class="fa fa-linkedin"></i>&nbsp;&nbsp;Linkedin
              </button>
            </a>
            <a
              href="https://codesandbox.io/dashboard/drafts?workspace=db4dea73-4f4e-442c-94c2-10316751a224"
              target="_blank"
            >
              <button type="button" class="btn btn-default">
                <i class="fab fa-codepene"></i>&nbsp;&nbsp;CodeSandBox
              </button>
            </a>
          </div>
        </div>
        {/* -- container -- */}
      </div>

      {/*   --- About --  */}

      <div class="jumbotron" id="about">
        <div id="about-container">
          <h2 class="text-primary">Design, Develop, Deliver</h2>
          <p>
            An enthusiastic, self-motivated junior web developer. Always tries
            to achieve the highest standard in what ever is undertaken. Ability
            to work in a multi-disciplined environment, adapting and being
            versatile. Designs, develops, tests, and supports the develoment
            process. Identify and solve technical problems. Willing to learn new
            languages, skills, and technologies.
          </p>
          <h3 class="text-primary">Competencies:</h3>
          <p>Languages & Frameworks:</p>

          <div className="labels">
            <div className="label-text">ReactJS</div>
            <div className="label-text">Javascript</div>
            <div className="label-text">HTML5</div>
            <div className="label-text">CSS3</div>
            <div className="label-text">NodeJS / Express</div>
            <div className="label-text">MySQL</div>
            <div className="label-text">Git/Github</div>
            <div className="label-text">Scrum & Agile methodologies</div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio --> */}
      <div id="portfolio">
        <div id="portfolio-container">
          <h3>Some of my projects...</h3>
          <div class="row portitems">
            <a href="https://fixee-project.netlify.app" target="_blank">
              <div class="portitem" id="funily">
                Fixee-Me
              </div>
            </a>
            <a href="https://mars-app-project.netlify.app/" target="_blank">
              <div class="portitem" id="calculator">
                Mars-Weather
              </div>
            </a>
            <a href="https://fit-me-now.netlify.app/" target="_blank">
              <div class="portitem" id="pomodoro">
                Fit-Me
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Contact --> */}
      <div class="jumbotron" id="contact">
        <div id="contact-container">
          <h3 id="email">
            <i class="fa fa-google">esther.gutierez.rodr@gmail.com</i>
          </h3>
          <div
            class="btn-group"
            role="group"
            aria-label="..."
            id="social-group"
          >
            <a href="https://github.com/esthergutierrezr" target="_blank">
              <button type="button" class="btn btn-default">
                <i class="fab fa-github"></i>&nbsp;&nbsp;GitHub
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/esther-gutierrez-rodriguez/o"
              target="_blank"
            >
              <button type="button" class="btn btn-default">
                <i class="fa fa-linkedin"></i>&nbsp;&nbsp;Linkedin
              </button>
            </a>
            <a
              href="https://codesandbox.io/dashboard/drafts?workspace=db4dea73-4f4e-442c-94c2-10316751a224"
              target="_blank"
            >
              <button type="button" class="btn btn-default">
                <i class="fab fa-codepene"></i>&nbsp;&nbsp;CodeSandBox
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* -- Footer -- */}
      <div class="panel panel-default" id="footer">
        <div class="panel-body">
          <div class="panel-footer">
            Copyright <i class="fa fa-copyright"></i> Esther Gutierrez 2021-
            <span id="cright"></span>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
