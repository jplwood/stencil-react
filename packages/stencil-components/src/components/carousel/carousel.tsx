import { Component } from "@stencil/core";
import Swiper from "swiper/dist/js/swiper.esm.bundle";

@Component({
  tag: "ef-carousel",
  styleUrls: ["./swiper/swiper.min.css", "carousel.css"]
})
export class Carousel {
  componentDidLoad() {
    this.initSwiper();
  }

  private async initSwiper() {
    // init swiper core
    // @ts-ignore
    const swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      },
      slidesPerView: "auto"
    });
    return swiper;
  }

  render() {
    return (
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="box">
              <img src="https://media.eftours.com/~/media/images/etus/collections/tiles/halftile-collections-popular_optimized.jpg?h=264&w=310" />
              <h2>Popular Tours</h2>
              <p>
                Chosen by our travelers, these tried-and-true favorites bring
                destinations to life through culturally immersive activities.
              </p>
            </div>
          </div>
          <div class="swiper-slide">
            {" "}
            <div class="box">
              <img src="https://media.eftours.com/~/media/images/etus/collections/tiles/halftile-collections-stem_optimized.jpg?h=264&w=310" />
              <h2>STEM Tours</h2>
              <p>
                Chosen by our travelers, these tried-and-true favorites bring
                destinations to life through culturally immersive activities.
              </p>
            </div>
          </div>
          <div class="swiper-slide">
            {" "}
            <div class="box">
              <img src="https://media.eftours.com/~/media/images/etus/collections/market-development-tours/collections-tile-vietnam.jpg?h=264&w=310" />
              <h2>New Tours</h2>
              <p>
                Chosen by our travelers, these tried-and-true favorites bring
                destinations to life through culturally immersive activities.
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination" />

        <div class="swiper-button-prev" />
        <div class="swiper-button-next" />
      </div>
    );
  }
}
