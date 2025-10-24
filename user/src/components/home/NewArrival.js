import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <h1 className="text-center">New Arrival</h1>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img src="https://picsum.photos/300/200?random=1" alt="Slide 1" />
                            <h3>1</h3>
                        </div>
                        <div>
                            <img src="https://picsum.photos/300/200?random=2" alt="Slide 2" />
                            <h3>2</h3>
                        </div>
                        <div>
                            <img src="https://picsum.photos/300/200?random=3" alt="Slide 3" />
                            <h3>3</h3>
                        </div>
                        <div>
                            <img src="https://picsum.photos/300/200?random=4" alt="Slide 4" />
                            <h3>4</h3>
                        </div>
                        <div>
                            <img src="https://picsum.photos/300/200?random=5" alt="Slide 5" />
                            <h3>5</h3>
                        </div>
                        <div>
                            <img src="https://picsum.photos/300/200?random=6" alt="Slide 6" />
                            <h3>6</h3>
                        </div>
                        <div>
                            <img src="https://picsum.photos/300/200?random=7" alt="Slide 7" />
                            <h3>7</h3>
                        </div>
                        <div>
                            <img src="https://picsum.photos/300/200?random=8" alt="Slide 8" />
                            <h3>8</h3>
                        </div>
                        <div>
                            <img src="https://picsum.photos/300/200?random=9" alt="Slide 9" />
                            <h3>9</h3>
                        </div>
                    </Slider>
                </div>
            </Fragment>
        );
    }
}

export default NewArrival;
