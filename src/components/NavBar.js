import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
  /* display an <a> tag for each link here */}
  <a href="#home" key={links}> Home</a>
  <a href="#about" key={links}>About Me</a>
  <a href="#projects" key={links}>Projects</a>
  </nav>;
}

export default NavBar;
