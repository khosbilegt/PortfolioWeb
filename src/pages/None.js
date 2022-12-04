import { useEffect } from "react"
import { Navbar } from "../components/Navbar"
import { Link } from "react-router-dom";
import './None.css';

export function None(props) {
     useEffect(() => {
          document.title = "404 Error"
     }, [])

     return (
          <div className="None">
               <Navbar />
               <div className="none-content">
                    <h1>Oops</h1>
                    <h2>404 Error</h2>  
                    <h3>Page is under construction...</h3>
                    <Link to="/">Go to Homepage</Link>
               </div>
          </div>
     )
}