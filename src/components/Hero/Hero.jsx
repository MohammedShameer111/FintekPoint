import React from 'react'
import './Hero.css'
import { ImArrowUpRight2 } from 'react-icons/im'
import { Link } from 'react-scroll';
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Launch Your IT Career in 6 to 8 Months with Guaranteed Placement.</h1>
        <p>We elevate talented individuals with little or no tech experience and help them to launch their careers in the IT industry.
        </p>


<button className='btn'>
  <Link 
    to='newsletter' // This refers to the id of the element at the bottom of the page.
    smooth={true}
    offset={-76}
    duration={1000}
    style={{ display: 'flex', alignItems: 'center' }}
  >
    Apply Now
    <span style={{ padding: "4px", marginLeft: "4px" }}>
      <ImArrowUpRight2 />
    </span>
  </Link>
</button>

      </div>
    </div>
  )
}

export default Hero
