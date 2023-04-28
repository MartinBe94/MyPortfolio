import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import './index.css'
import {Link, Outlet, RouterProvider,createBrowserRouter} from "react-router-dom"
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { Education } from './components/Education/Education'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: (
        <>
        <Navbar />
         <Outlet/>
        </>
        ),
        children:[
    
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "education",
            element: <Education/>,
          },
          {
            path: "experience",
            element: <Experience/>,
          },
          {
            path: "skills",
            element: <Skills/>,
          },
          {
            path: "projects",
            element: <Projects/>,
          },
          {
            path: "about",
            element: <About/>,
          },
          {
            path: "contact",
            element: <Contact/>,
          },
    ]
      
    },
  ]

)

// const NavBar =()=>{
//   <>
//   <Navbar/>
//   <Outlet/>
//   </>
// }

// const router = createBrowserRouter(
//   [
//     {
//       path:"/",
//       element: (
//         <>
//         <div className='Menu'>
//           <nav className='navmenu'>
//           <Navbar/>
//           </nav>
//           <nav className='menu'>
//         <br></br>
//         <App></App>
//         <Link to="/">Home</Link>
//         <br></br>
//         <Link to="education">Education</Link>
//         <br></br>
//         <Link to="experience">Experience</Link>
//         <br></br>
//         <Link to="skills">Skills</Link>
//         <br></br>
//         <Link to="projects">Projects</Link>
//         <br></br>
//         <Link to="about">About</Link>
//         <br></br>
//         <Link to="contact">Contact</Link>
//         </nav>

//         </div>
        
//         </>
//       )
//     },



//     {
//       path:"education",
//       element: (
//         <>
//         <br></br>
//         <Education/>
//         </>
//       )
//     },
//     {
//       path:"experience",
//       element: (
//         <>
//         <br></br>
//         <Experience/>
//         </>
//       )
//     },
//     {
//       path:"skills",
//       element: (
//         <>
//         <br></br>
//         <Skills/>
//         </>
//       )
//     },
//     {
//       path:"projects",
//       element: (
//         <>
//         <br></br>
//         <Projects/>
//         </>
//       )
//     },
//     {
//       path:"about",
//       element: (
//         <>
//         <br></br>
//         <About/>
//         </>
//       )
//     },
//     {
//       path:"contact",
//       element: (
//         <>
//         <br></br>
//         <Contact/>
//         </>
//       )
//     },
//   ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}></RouterProvider>
)
