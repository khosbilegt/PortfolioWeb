import { useEffect } from "react"
import { Typer } from  "../components/Typer"
import { Navbar } from "../components/Navbar"
import './Home.css';

export function Home(props) { 
     useEffect(() => {
          document.title = "I am a..."
     }, [])

     return (
          <div className="Home">
               <Navbar active="Home" />
               <Typer />
          </div>
     )
}