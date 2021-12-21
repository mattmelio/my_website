import ProPic from "../pictures/ProPic.JPG";

import classes from "./About.module.css";

function AboutMe() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.about}>
          <h2> About Me </h2>
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/matthew-melio/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={classes.pro}
              src={ProPic}
              alt="ProPic"
              style={{
                resizeMode: "contain",
                height: "30%",
                width: "30%",
              }}
            />
          </a>
          <br />
          <br />
          <p>
            {" "}
            I am a recent graduate of St. John's University in May 2021. I first
            got into Website Design and Software Development my senior year of
            high school. I took a Web Development and a Robotics class that
            taught me how to code. We were tasked with to creating our own
            website and 2D video game using Oculus. Throughout college, I
            learned more about web design and programming. I knew that it was
            what I wanted to make a career of. I fell in love with Java
            Programming, Website design (Using HTML, JavaScript, and CSS), and
            systems programming (Use of Linux and Terminal).
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
