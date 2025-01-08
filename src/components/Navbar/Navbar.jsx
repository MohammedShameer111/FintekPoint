import React, { useEffect, useState } from 'react'
import menu_icon from '../../assets/menu-icon.png'
import './Navbar.css';
import { Link } from 'react-scroll';
import { FaGraduationCap } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { RiGraduationCapLine } from "react-icons/ri";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LuNotebookPen } from "react-icons/lu";


const Navbar = () => {
  const [sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true):setSticky(false)
    })
  },[]);
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }
  return (
    <nav  className={`container ${sticky ? 'dark-nav':''}`}>
      <div className='fintek'>
      <span><FaGraduationCap style={{fontSize:"40px",marginRight:"10px" }}/></span>
      <span style={{ color: "#02a9f7", fontSize: "30px" }} className="fintek-text">
  <b>FINTEK</b>
</span>

      <span style={{fontSize:"30px",zIndex:"-1"}}><b>POINT</b></span>
      </div>
     
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' onClick={toggleMenu} smooth={true} offset={0} duration={500} ><GoHome className='icon'/>Home</Link></li>
        <li><Link to='program'  onClick={toggleMenu} smooth={true} offset={-260} duration={500}><RiGraduationCapLine className='icon'/>Program</Link></li>

        <li><Link to='campus'  onClick={toggleMenu} smooth={true} offset={-260} duration={500}><HiOutlineBuildingOffice className='icon'/>Campus</Link></li>
        <li><Link to='testimonials'  onClick={toggleMenu} smooth={true} offset={-260} duration={500}><LuNotebookPen className='icon'/>Courses</Link></li>
        {/* <li><Link to='contact'  onClick={toggleMenu} smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li> */}
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
