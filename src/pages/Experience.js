import { useEffect } from "react"
import { Navbar } from "../components/Navbar"
import './Experience.css';

export function Experience(props) {
     useEffect(() => {
          document.title = "My Journey"
     }, [])

     return (
          <div className="Experience">
               <Navbar active="Experience" />
               <div className="experience-content">
                    <h1>The Epic Quest for a Bachelor's Degree</h1>
                    <p>McGuffin</p>
                    <p>Hello</p>
               </div>
          </div>
     )
}