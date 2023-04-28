import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import './MobileNavbar.css';
import { Link } from "react-router-dom";
import { MobileNavbarData } from "./MobileNavbarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const MobileNavbar =()=>{
    const [Mobilenavbar,setMobileNavbar] = useState(false);
    const showMobileNavbar = () => setMobileNavbar (!Mobilenavbar);

    return(
    <>
    <div className="Mobilenavbar">
       
        <Link to="#" className="mobilenav">
        <nav className="baricon" >
            <FaIcons.FaBars onClick={showMobileNavbar}/>
            </nav>
        </Link>
        <nav className={Mobilenavbar?"mobilenav-menu active" : "mobilenav-menu"}>
        <nav className="closeicon" onClick={showMobileNavbar}>
                <Link to="#">
                    <AiIcons.AiOutlineClose/>
                    </Link>
                {MobileNavbarData.map((item,index) => {
                    return (
                        <p key={index}>
                        <Link to={item.path}>
                            <span>{item.title}</span>
                        </Link>
                        </p>
                    )
                })}
            </nav>
        </nav>

        </div>

        
    </>
    )

}