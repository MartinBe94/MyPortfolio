import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import * as DiIcons from "react-icons/di"
import project from '../images/bulb.gif'

import './Projects.css'

export const Projects =() =>{

    return(
    <>
    <div className="card">
    <header className="headtitle">
    <h1>Projects</h1>
    </header>
    
    <img src={project} alt="my-gif" className="bulb"/>
        <div className="projects">
    <section className="project">
    <p>
    <Link to="https://github.com/MartinBe94/Restuarant-Booking-System">
    <SiIcons.SiCsharp/><SiIcons.SiJson/> Restaurant Booking System
    </Link>
    </p>

    <p>
    <Link to="https://github.com/MartinBe94/Company-API-Database">
    <SiIcons.SiCsharp/><FaIcons.FaDatabase/> Company (API Database)
    </Link>
    </p>
    
    <p>
    <Link to="https://github.com/MartinBe94/MongoCRUDDB">
    <SiIcons.SiCsharp/><SiIcons.SiMongodb/> Sneakers Webshop (MongoCRUD DB)
    </Link>
    </p>
    </section>

    <section>
    <p>
    <Link to="https://github.com/MartinBe94/FilmStream">
    <SiIcons.SiCsharp/><FaIcons.FaBootstrap/><FaIcons.FaDatabase/> Filstream (API/Database/Bootstrap)
    </Link>
    </p>

    <p>
    <Link to="https://github.com/MartinBe94/My-Homepage.git">
    <SiIcons.SiJavascript/><SiIcons.SiHtml5/><SiIcons.SiCss3/> Basic Webpage (Javascript/HTML/CSS)
    </Link>
    </p>

    <p>
    <Link to="https://github.com/MartinBe94/Webpage-React-JS-Css-.git">
    <SiIcons.SiReact/><SiIcons.SiJavascript/><SiIcons.SiCss3/> Simple React Webpage (React/Javascript/CSS)
    </Link>
    </p>

    <p>
    <SiIcons.SiReact/><SiIcons.SiJavascript/><SiIcons.SiCss3/> My Web Portfolio (React/Javascript/CSS)
    </p>
    </section>
    </div>
    </div>
    </>
    )

}