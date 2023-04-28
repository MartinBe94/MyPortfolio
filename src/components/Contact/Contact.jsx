import { useState } from "react";
import { Link } from "react-router-dom";
import Pic from '../images/Pic1.jpg'
import * as FaIcons from "react-icons/fa"
import './Contact.css'
import { ContactForm } from "./ContactForm";

export const Contact =() =>{

    return(
    <>
    <div className="card">
        <div className="title">
    <h1>Contact</h1>
    <img src={Pic} className="Pic"></img>
             <h2>You can reach me on:</h2>
             <div className="icons">
              
              <span>
             <Link to="https://www.linkedin.com/in/martin-be-1a1458205/">
             <FaIcons.FaLinkedin/> 
             </Link>
             </span>
             <span>
             <Link to="https://github.com/MartinBe94">
             <FaIcons.FaGithub/>
             </Link>
             </span>

             <span>
             {/* <Link to="Martin.be@iths.se"> */}
             <a href = "mailto: Martin.be@iths.se">
             <FaIcons.FaMailBulk/>
             </a> 
             </span>
             </div>
    </div>
        <ContactForm></ContactForm>
    
    </div>
  
             
    </>
    )

}