import React from 'react';
import Projects from './Projects';


//caroussel imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const divStyle = {
    backgroundColor:'red',
    width: "300px",
    height: "300px",
};


const PortfolioSlider = ({toggleModal}) => {
    console.log()
    return (
        <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
        </Carousel>
    )
}

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType } 
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()}> > </button>;
  };
  
  const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType } 
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()}> &#60; </button>;
  };

export default PortfolioSlider;