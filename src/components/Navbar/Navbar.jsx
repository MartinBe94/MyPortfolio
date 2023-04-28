import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Contact } from "../Contact/Contact";
import { About } from "../About/About";

export const Navbar =()=>{
    const [navbar,setNavbar] = useState(false);
    const showNavbar = () => setNavbar (!navbar);
    
    const[card,setCard] = useState(false)
    const showCard = () => setCard (!card);

    const[aboutcard,setAboutCard] = useState(false)
    const showAboutCard = () => setAboutCard (!card);

    return(
    <>
    <div className="navbar">
       
        <Link to="#" className="nav">
        <nav className="baricon" >
            <FaIcons.FaBars onClick={showNavbar}/>
            </nav>
        </Link>
        

        {/* <nav className={navbar?"nav-menu active" : "nav-menu"}>
        <Link to="#">
            < nav  className="closeicon">
            <AiIcons.AiOutlineClose onClick={showNavbar}/>
            <h1>Navbar</h1>
            </nav>
            <nav onClick={showNavbar}>
            <Link to="/">Home</Link>
        <br></br>
        <Link to="education">Education</Link>
        <br></br>
        <Link to="experience">Experience</Link>
        <br></br>
        <Link to="skills">Skills</Link>
        <br></br>
        <Link to="projects">Projects</Link>
        <br></br>
        <Link to="about">About</Link>
        <br></br>
        <Link to="contact">Contact</Link>
            </nav>

        </Link>
        </nav> */}
        
        <nav className={navbar?"nav-menu active" : "nav-menu"}>
        <nav className="closeicon" onClick={showNavbar}>
                <Link to="#">
                    <AiIcons.AiOutlineClose/>
                    </Link>
                    
                {NavbarData.map((item,index) => {
                    return (
                        
                        <p key={index}>
                        <Link to={item.path} >
                        <span  onClick={showCard}>{item.title}</span>
                        </Link>
                        </p>
                        
                        
                        
                    )
                })}
            </nav>

        </nav>
        {/* <nav className={card?"card active" : "card"}>
        {NavbarData.map((item,index) => {
           
           
           if(item.title==="About"){
                
                return(
                    <p key={index}>
                <span><About/></span>
                </p>
                )
            }else if(item.title==="Contact"){
                return(
                <p key={index}>
                <span><Contact/></span>
                </p>
                )
                
            }
        })
        }
                </nav> */}
        </div>

        
    </>
    )

}