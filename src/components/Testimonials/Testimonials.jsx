
import React, { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Testimonials.css";
import image1 from "../../assets/robot.jpeg"
import image2 from "../../assets/fullstack.jpeg"
import image3 from "../../assets/testing.jpeg"
import image4 from "../../assets/devops.jpeg"


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: image1,
      quote: "Robotic Process Automation",
      author:
        "Unlock your potential with comprehensive training in UiPath, the leading platform for RPA. Learn to automate repetitive tasks, streamline processes.",
    },
    {
      image: image2,
      quote: "Full Stack Web Development",
      author:
        "Master the art of full stack web development with our comprehensive training program. Learn essential technologies like HTML5, CSS, React, Redux, Node.js, AWS.",
    },
    {
      image: image3,
      quote: "Software Testing Automation",
      author:
        "Get trained in Software Quality Assurance (QA) and master the art of test automation. Learn essential tools and methodologies to ensure software reliability.",
    },
    {
      image: image4,
      quote: "DevOps & Cloud Migration",
      author:
        "Get trained in AWS or Azure Cloud and gain expertise in building robust CI/CD pipelines using tools like Docker, Terraform, and Jenkins. Learn to streamline deployments.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index % 2 === 0 ? "gradient-bg-blue" : "gradient-bg-green"
              }`}
            >
              <div className="slide-image">
                <img src={slide.image} alt="Slide" />
              </div>
              <div className="slide-content">
                <blockquote className="quote">{slide.quote}</blockquote>
                <p className="author">{slide.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="nav-button prev" onClick={prevSlide}>
        <GrPrevious />
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        <GrNext />
      </button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
