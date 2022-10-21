import React from "react";
import '../css-components/featured.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Featured() {
    return (
  <div class="featured-main">
    <div class="card text-center feature-skills">
    <div class="card-body">
    <h5 class="card-title">Take a look at my Skill!</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to={`Skills`} class="btn btn-primary">Skills</Link>
  </div>
            </div>
             <div class="card text-center feature-experience">

          
  <div class="card-body">
    <h5 class="card-title">Take a look at my Skill!</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to={`Experience`} class="btn btn-primary">Experience</Link>
  </div>

            </div>
             <div class="card text-center feature-projects">
 
  <div class="card-body">
    <h5 class="card-title">Take a look at my Skill!</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to={`Projects`} class="btn btn-primary">Projects</Link>
  </div>

            </div>
             <div class="card text-center feature-blog">
 
  <div class="card-body">
    <h5 class="card-title">Take a look at my Skill!</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="https://frankj94.github.io/" rel="noreferrer" target="_blank" class="btn btn-primary">Blog</a>
  </div>
 
            </div>
             <div class="card text-center feature-wiki">

  <div class="card-body">
    <h5 class="card-title">Take a look at my Skill!</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="http://192.168.86.12/doku.php" rel="noreferrer" target="_blank" class="btn btn-primary">Wiki</a>
  </div>
 
            </div>
             <div class="card text-center feature-contact">

  <div class="card-body">
    <h5 class="card-title">Take a look at my Skill!</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to={`/contacts`} class="btn btn-primary">Contact</Link>
  </div>

</div>
        </div>
    )
}

export default Featured