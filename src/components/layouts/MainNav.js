import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <header className ={classes.header}>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-me">About Me</a>
            </li>
            <li>
              <a href="/music">Music</a>
            </li>
            <li>
              <a href="/contact-me">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNav;
