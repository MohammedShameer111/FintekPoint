import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import { FaRobot } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { SiCloudbees } from "react-icons/si";
import { VscDebugAltSmall } from "react-icons/vsc";
import rpa from "../../assets/rpa.pdf";

const testimonialsData = [
  {
    icon: <FaRobot />,
    title: "Robotic Process Automation",
    description:
      "Unlock your potential with comprehensive training in UiPath, the leading platform for RPA. Learn to automate repetitive tasks, streamline processes.",
    pdf: rpa,
  },
  {
    icon: <BsStack />,
    title: "Full Stack Web Development",
    description:
      "Master the art of full stack web development with our comprehensive training program. Learn essential technologies like HTML5, CSS, React, Redux, Node.js, AWS.",
    pdf: "/path/to/pdf2.pdf",
  },
  {
    icon: <SiCloudbees />,
    title: "DevOps & Cloud Migration",
    description:
      "Get trained in AWS or Azure Cloud and gain expertise in building robust CI/CD pipelines using tools like Docker, Terraform, and Jenkins. Learn to streamline deployments.",
    pdf: "/path/to/pdf3.pdf",
  },
  {
    icon: <VscDebugAltSmall />,
    title: "Software Testing Automation",
    description:
      "Get trained in Software Quality Assurance (QA) and master the art of test automation. Learn essential tools and methodologies to ensure software reliability.",
    pdf: "/path/to/pdf4.pdf",
  },
];

const Testimonials = () => {
  const slider=useRef();
  let tx=0;
  const slideForward =()=>{
    if(tx >-50){
      tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward =()=>{
    if(tx < 0){
      tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }



  const handleDownload = (pdf) => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = pdf.split("/").pop(); // Dynamically setting the download name
    link.click();
  };



  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider} style={{ transform: `translateX(${tx}%)` }}>
          {testimonialsData.map((testimonial, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  {/* <span>{testimonial.icon}</span> */}
                  <div>
                    <h3>{testimonial.title}</h3>
                  </div>
                </div>
                <p>{testimonial.description}</p>
                <button className="btns" onClick={() => handleDownload(testimonial.pdf)}>
                  Download
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
