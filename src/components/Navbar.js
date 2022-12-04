import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar(props) {
     const [home, setHome] = useState("")
     const [about, setAbout] = useState("")
     const [skills, setSkills] = useState("")
     const [portfolio, setPortfolio] = useState("")
     const [experience, setExperience] = useState("")

     useEffect(() => {
          switch(props.active) {
               case "Home":
                    setHome("active")
                    setAbout("")
                    setSkills("")
                    setPortfolio("")
                    setExperience("")
                    break
               case "About":
                    setAbout("active")
                    setHome("")
                    setSkills("")
                    setPortfolio("")
                    setExperience("")
                    break
               case "Skills":
                    setSkills("active")
                    setAbout("")
                    setHome("")
                    setPortfolio("")
                    setExperience("")
                    break
               case "Portfolio":
                    setPortfolio("active")
                    setAbout("")
                    setSkills("")
                    setHome("")
                    setExperience("")
                    break
               case "Experience":
                    setExperience("active")
                    setAbout("")
                    setSkills("")
                    setPortfolio("")
                    setHome("")
                    break
          }
     })
     
     return (
          <nav className="navbar">
               <ul>
                    <Link to="/" id={home}>Home</Link>
                    <Link to="/about" id={about}>About</Link>
                    <Link to="/skills" id={skills}>Skills</Link>
                    <Link to="/portfolio" id={portfolio}>Portfolio</Link>
                    <Link to="/experience" id={experience}>Experience</Link>
               </ul>
          </nav>
     )
}

