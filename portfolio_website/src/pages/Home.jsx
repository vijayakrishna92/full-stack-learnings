import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Home.css';
import slide1 from "../assets/images/background1.jpg";
import slide2 from "../assets/images/background2.jpg";
import slide3 from "../assets/images/background3.jpg";
import photo1 from "../assets/images/img1.JPG";
import photo2 from "../assets/images/img2.png";
import photo3 from "../assets/images/img3.PNG";


const images = [slide1, slide2, slide3
];

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };

    return (
        <div className="home-container">
            <div className="carousel-wrapper">
                <Slider {...settings}>
                    <div className="slide">
                        <img src={images[0]} alt="Slide 1" className="slide-image" />
                        <div className="slide-text">
                            <h1>Hello, I'm Vijaya Krishna</h1>
                            <p>I love building with code — turning ideas into interactive experiences</p>
                        </div>
                    </div>

                    <div className="slide">
                        <img src={images[1]} alt="Slide 2" className="slide-image" />
                        <div className="slide-text">
                            <h1>Futurist by Heart</h1>
                            <p>I believe in creating technologies that shape a better tomorrow</p>
                        </div>
                    </div>

                    <div className="slide">
                        <img src={images[2]} alt="Slide 3" className="slide-image" />
                        <div className="slide-text">
                            <h1>Inspired by Nature</h1>
                            <p>I strive to work in harmony with the planet — sustainable tech is the future</p>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="gallery-alternating">
                <div className="gallery-item left">
                    <img src={photo1} alt="Photo 1" className="gallery-img" />
                    <div className="gallery-text">
                        <h2>The Innovator</h2>
                        <p>
                            Hi, I’m Vijaya Krishna — an engineer turned AI builder. With a background
                            in electronics and mechanical systems, I’ve built custom hardware,
                            trained teams, and created real-world solutions from Arduino-based
                            machines to smart automation.
                        </p>
                    </div>
                </div>

                <div className="gallery-item right">
                    <div className="gallery-text">
                        <h2>The AI Explorer</h2>
                        <p>
                            I specialize in intelligent systems — from RAG-based chatbots to
                            satellite image segmentation. I’ve led multi-agent experiments with
                            frameworks like CrewAI, LangGraph, and AutoGen, contributing to projects
                            that span climate tech, healthcare, and education.
                        </p>
                    </div>
                    <img src={photo2} alt="Photo 2" className="gallery-img" />
                </div>

                <div className="gallery-item left">
                    <img src={photo3} alt="Photo 3" className="gallery-img" />
                    <div className="gallery-text">
                        <h2>The Visionary</h2>
                        <p>
                            I don’t just build — I design, research, and teach. From UI mockups in
                            Figma to Flutter-based mobile apps, and market research to clinical
                            planning, I bring clarity to innovation. I’m here to create lasting
                            impact.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Home;