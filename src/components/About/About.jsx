import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        
        
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur at enim ullam doloremque vitae in iste? Dolorum accusamus sunt debitis id incidunt eius libero nesciunt delectus neque natus, cupiditate beatae ut molestias ad fugiat enim obcaecati tempore reiciendis animi? Eius!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur at enim ullam doloremque vitae in iste? Dolorum accusamus sunt debitis id incidunt eius libero nesciunt delectus neque natus, cupiditate beatae ut molestias ad fugiat enim obcaecati tempore reiciendis animi? Eius!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur at enim ullam doloremque vitae in iste? Dolorum accusamus sunt debitis id incidunt eius libero nesciunt delectus neque natus, cupiditate beatae ut molestias ad fugiat enim obcaecati tempore reiciendis animi? Eius!</p>
      </div>
    </div>
  )
}

export default About
