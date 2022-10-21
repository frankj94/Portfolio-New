import React from "react";
import '../css-components/carousel.css';




import Nature1 from '../assets/nature1.jpg';
import Nature2 from '../assets/nature2.jpg';
import Nature3 from '../assets/nature3.jpg';

function Carousel() {
    return (
        <div class="carousel-main">
                <div class="home-main">
                  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                  <div class="carousel-item active">
                <img src={Nature1} class="d-block w-100" alt="One"/>
    </div>
    <div class="carousel-item">
      <img src={Nature2} class="d-block w-100" alt="Two"/>
    </div>
    <div class="carousel-item">
      <img src={Nature3} class="d-block w-100" alt="Three"/>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  </div>
</div>
        </div>
        </div>
    )
}

export default Carousel