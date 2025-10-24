import React, { Component } from 'react';
import Slider from "react-slick"; // Importing the Slider component from react-slick
import 'slick-carousel/slick/slick.css';  // Import Slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme CSS

class SliderHome extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="slider-container container-fluid">
                <Slider {...settings}>
                    <div>
                        <img
                            src={`https://picsum.photos/900/400?random=${Math.random()}`}
                            alt="Slide 1"
                            className="slider-image"
                        />
                        <h3>Slide 1</h3>
                    </div>
                    <div>
                        <img
                            src={`https://picsum.photos/900/400?random=${Math.random()}`}
                            alt="Slide 2"
                            className="slider-image"
                        />
                        <h3>Slide 2</h3>
                    </div>
                    <div>
                        <img
                            src={`https://picsum.photos/900/400?random=${Math.random()}`}
                            alt="Slide 3"
                            className="slider-image"
                        />
                        <h3>Slide 3</h3>
                    </div>
                    <div>
                        <img
                            src={`https://picsum.photos/900/400?random=${Math.random()}`}
                            alt="Slide 4"
                            className="slider-image"
                        />
                        <h3>Slide 4</h3>
                    </div>
                    <div>
                        <img
                            src={`https://picsum.photos/900/400?random=${Math.random()}`}
                            alt="Slide 5"
                            className="slider-image"
                        />
                        <h3>Slide 5</h3>
                    </div>
                    <div>
                        <img
                            src={`https://picsum.photos/900/400?random=${Math.random()}`}
                            alt="Slide 6"
                            className="slider-image"
                        />
                        <h3>Slide 6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SliderHome;
