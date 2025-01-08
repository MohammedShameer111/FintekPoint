import React from 'react';
import './Programs.css';
import program1 from '../../assets/program-1.png';
import program2 from '../../assets/program-2.png';
import program3 from '../../assets/program-3.png';
import { LiaHandshakeSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiBook } from "react-icons/tfi";
const programsData = [
  {
    img: program1,
    icon: <TfiBook/>,
    title: "Training",
    description: "Gain real-world experience by working on live projects in a team environment. Our training simulates a professional workspace, helping you build skills, confidence, and a strong portfolio."
  },
  {
    img: program2,
    icon: <LiaHandshakeSolid />,
    title: "Job Assistance",
    description: "We provide personalized interview preparation, 1-on-1 feedback, and dedicated support to guide you every step of the way until you secure your dream job."
  },
  {
    img: program3,
    icon: <TfiLocationPin />,
    title: "Coaching",
    description: "Receive 12 months of on-the-job coaching to build your skills and ensure long-term success in your career."
  }
];

const Programs = () => {
  return (
    <div className="programs">
      {programsData.map((program, index) => (
        <div className="program" key={index}>
          <img src={program.img} alt={program.title} />
          <div className="caption">
            <span className="capicon">{program.icon}</span>
            <p>
              <span className="title">{program.title}</span><br />
              {program.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;
