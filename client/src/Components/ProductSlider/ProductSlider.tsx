import React, { useRef } from "react";

import "./ProductSlider.css";
import { sliderImages } from "../../constants/Constants";
import {
  Splide,
  SplideSlide,
  Splide as SplideType,
} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import images from "../../constants/images";

const ProductSlider = () => {
  const splideRef = useRef<SplideType>(null);

  const handleThumbnailClick = (index: number) => {
    if (splideRef.current) {
      splideRef.current.splide.go(index);
    }
  };
  return (
    <div className="product-slider-wrapper">
      <div className="product-image-holder">
        <Splide
          ref={splideRef}
          options={{
            type: "slide", // or "fade" for a smoother transition
            perPage: 1, // Show only 1 image at a time
            perMove: 1, // Move 1 image at a time
            arrows: true, // Show navigation arrows
            pagination: true, // Show pagination dots
            rewind: true, // Loop back to the first slide
          }}
        >
          {sliderImages.map((img, index) => (
            <SplideSlide key={index}>
              <div className="product-slider-img">
                <img src={img} alt={`product view ${index + 1}`} />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="product-small-imageholder flex">
        {sliderImages.map((img, index) => (
          <div
            className="product-small-img-slider"
            key={index}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
