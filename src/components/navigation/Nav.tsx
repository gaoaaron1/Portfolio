import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { AiOutlineComment } from 'react-icons/ai'

const Nav: React.FC = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav == '#' ? 'active' : ''}>
                <AiOutlineHome />
                <span className="tooltip">Home</span>
            </a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav == '#about' ? 'active' : ''}>
                <AiOutlineUser />
                <span className="tooltip">About Me</span>
            </a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav == '#experience' ? 'active' : ''}>
                <BiBook />
                <span className="tooltip">Experience</span>
            </a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav == '#projects' ? 'active' : ''}>
                <RiServiceLine />
                <span className="tooltip">Projects</span>
            </a>
            <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav == '#testimonials' ? 'active' : ''}>
                <AiOutlineComment />
                <span className="tooltip">Testimonials</span>
            </a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}>
                <BiMessageSquareDetail />
                <span className="tooltip">Contact</span>
            </a>
        </nav>
    )
}

export default Nav
