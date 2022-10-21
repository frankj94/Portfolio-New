import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <div class="nav">
        <Link to={`/`} id="nav-home">Home</Link>
        <Link to={`/skills`} id="nav-skills">Skills</Link>
        <Link to={`/experience`} id="nav-experience">Experience</Link>
        <Link to={`/projects`} id="nav-projects">Projects</Link>
        <a id="nav-blog" href="https://frankj94.github.io/" rel="noreferrer" target="_blank">Blog</a>
        <a id="nav-wiki" href="http://192.168.86.12/doku.php" rel="noreferrer" target="_blank">Wiki</a>
      <Link to={`/contacts`} id="nav-contact">Contact</Link>
    </div>
    
    )
}

export default Nav;