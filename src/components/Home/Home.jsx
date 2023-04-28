import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import './Home.css'

export const Home = ()=>{
    return (
        <>
        <article className="hometitle">
          <header>
        <h1>Welcome to my Portfolio!</h1>
        <h2>I'm Martin Be!</h2>
        </header>
        </article>
        {/* <div className='App'>
        <div className='bg'>
          <div className='home'>
        <h1>Home</h1>
        </div>
        </div>
        <nav className='bar'>
        <MobileNavbar></MobileNavbar>
        <Navbar/>
        </nav>
        </div> */}
        </>
      )
}