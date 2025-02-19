import React from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Schedule from './Components/Schedule/Schedule'
import Contact from './Components/Contact/Contact'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Materials from './Components/Materials/Materials'
import AttendancePage from './Components/AttendancePage/AttendancePage'
import AAbout from './Components/AAbout/AAbout' 

import {createBrowserRouter , RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(
  [
    {path:"/",
     element: 
     <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subtitle='Our PROGRAM' title='What We Offer'/>
          <Programs/>
          <About/>
        </div>
     </div>
    },
    {path:"/schedule",
      element:
      <div>
        <Navbar/>
        <Schedule/>
      </div>
    },
    {path:"/programs",
      element:
      <div>
        <Navbar/>
        
        <Programs/>
      </div>
    },
    {path:"/contact",
     element:
      <div>
        <Navbar/>
        <Contact/>
      </div>
    },
    {path:"/signup",
     element:
      <div>
        <Navbar/>
        <Signup/>
      </div> 
    },
    {path:"/Login",
     element:
      <div>
        <Navbar/>
        <Login/>
      </div>
    },
    {path:"/materials",
     element:
      <div>
        <Navbar/>
        <Materials/>
      </div>
    },
    {path:"/attendance",
      element:
      <div>
        <Navbar/>
        <AttendancePage/>
      </div>
    },
    {path:"/aabout",
     element:
      <div>
        <Navbar/>
        <AAbout/>
      </div>
    }
  ]
);

const App = () => {
  return (
    <div>
      {/* <Navbar/>
      <Hero/>
      <div className="container">
         <Title subtitle='Our PROGRAM' title='What We Offer'/>
         <Programs/>
         <About/> */}
      {/* </div> */}
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
