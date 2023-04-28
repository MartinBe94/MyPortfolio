import { useState } from "react";
import './Skills.css'
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import * as DiIcons from "react-icons/di"
import skill from '../images/coding.gif'

export const Skills =() =>{

    return(
    <>
    <div className="card">
    <section className="skill">
    <h1>Skills</h1>
    </section>
    
    <img src={skill} alt="my-gif" className="coding" />
    <section className="language">
    <ul>
        <h2>Language</h2>
        <li>C# <SiIcons.SiCsharp/></li>
        <li>.Net <SiIcons.SiDotnet/></li>
        <li>Java <DiIcons.DiJava/></li>
        <li>HTML <SiIcons.SiHtml5/></li>
        <li>JAVASCRIPT <SiIcons.SiJavascript/></li>
        <li>CSS <SiIcons.SiCss3/></li>
        <li>SQL <FaIcons.FaDatabase/></li>
        <li>NOSQL</li>
    </ul>
    </section>

    <section className="tools">
    <ul>
        <h2>Tools</h2>
        <li>Visual Studio <SiIcons.SiVisualstudio/></li>
        <li>Visual Studio Code <SiIcons.SiVisualstudiocode/></li>
        <li>MongoDB <SiIcons.SiMongodb/></li>
        <li>Microsoft SQL Server 2019 <SiIcons.SiMicrosoftsqlserver/></li>
        <li>Git <SiIcons.SiGit/></li>
        <li>Github <SiIcons.SiGithub/></li>
        <li>Netbeans <SiIcons.SiApachenetbeanside/></li>
        <li>Figma <SiIcons.SiFigma/></li>
        <li>Bootstrap <SiIcons.SiBootstrap/></li>
    </ul>
    </section>

    </div>
    </>
    )

}